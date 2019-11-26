import DAO from './DAO';

import util from '../util';

/**
 * @typedef {Object} People
 * @property {Number} id
 * @property {String} name
 * @property {String} avatar
 */

/**
 * @typedef {Object} Story
 * @property {Number} id
 * @property {String} description
 * @property {Number} totalTime
 * @property {Number} remainTime
 * @property {Boolean} isBlocked
 * @property {Boolean} isChosen
 */

/**
 * @typedef {Object} DashboardDTO
 * @property {Object} taskBoard
 * @property {[Story]} taskBoard.backlog
 * @property {[Story]} taskBoard.todo
 * @property {[Story]} taskBoard.processing
 * @property {[Story]} taskBoard.done
 * @property {Number} totalStoryTime
 * @property {[Number]} remainTimeForEachDay
 */

const TaskMgr = {
  /**
   * Create a group in system
   * @param {[People]} memberList
   * @return {Number} groupId
   */
  createGroup(memberList) {
    return util.getRandom(100);
  },

  /**
   * Create a project belongs to a to a group
   * @param {ProjectConfigDTO} projectConfig
   * @return {Number} projectId
   *
   * @typedef {Object} ProjectConfigDTO
   * @property {Number} groupId
   * @property {Number} numOfSprint
   * @property {Number} numOfDayPreSprint
   */
  createProject(projectConfig) {
    return DAO.createProject(projectConfig.groupId, projectConfig.numOfSprint,
      projectConfig.numOfDayPreSprint);
  },

  /**
   * Push the backlog into project
   * @param {Number} projectId
   * @param {[Story]} initBacklog
   * @return {DashboardDTO} dashboard
   */
  createBackLog(projectId, initBacklog) {
    DAO.reloadStoriesList(projectId, initBacklog);
    DAO.pushRemainTime(projectId, initBacklog.reduce((workTimeSum, item) => workTimeSum + item.totalTime, 0));
    return this.getDashboard(projectId);
  },

  /**
   * Try set the project with projectId to the next sprint.
   * @param {Number} projectId
   * @return {NextSprintStatusDTO} nextSprintStatus
   *
   * @typedef {Object} NextSprintStatusDTO
   * @property {Boolean} success
   * @property {[Story]} backlog
   */
  setToNextSprint(projectId) {
    const { numOfSprint } = DAO.getProjectConfig(projectId);
    const { sprintNo } = DAO.getProjectCurrentStatus(projectId);
    if (sprintNo < numOfSprint) {
      const backlog = DAO.getBacklog(projectId);
      DAO.setProjectCurrentStatus(projectId, sprintNo + 1, 0);
      return {
        success: true,
        backlog,
      };
    }
    return {
      success: false,
      backlog: [],
    };
  },

  /**
   * Save todo list for this sprint
   * @param {Number} projectId
   * @param {[Story]} todoList
   * @return {DashboardDTO} dashboard
   */
  saveTodo(projectId, todoList) {
    DAO.updateStories(projectId, todoList);
    return this.getDashboard(projectId);
  },

  /**
   * Try set the project with projectId to the next day in current sprint.
   * @param {Number} projectId
   * @return {Boolean} success
   */
  setToNextDay(projectId) {
    const { numOfDayPreSprint } = DAO.getProjectConfig(projectId);
    const { sprintNo, dayNo } = DAO.getProjectCurrentStatus(projectId);
    const lastDayRemainTime = DAO.getLatestRemainTime(projectId);
    if (dayNo < numOfDayPreSprint) {
      DAO.setProjectCurrentStatus(projectId, sprintNo, dayNo + 1);
      DAO.pushRemainTime(projectId, lastDayRemainTime);
      return true;
    }
    return false;
  },

  /**
   * Update a story in current project
   * @param {Number} projectId
   * @param {Story} newStoryItem
   * @return {DashboardDTO} dashboard
   */
  updateStory(projectId, newStoryItem) {
    const oldStoryItem = DAO.getStory(projectId, newStoryItem.id);
    const todayRemainTime = DAO.getLatestRemainTime(projectId);
    if (newStoryItem.remainTime < 0) {
      newStoryItem.remainTime = 0;
    }
    DAO.updateLatestRemainTime(projectId, todayRemainTime - (oldStoryItem.remainTime - newStoryItem.remainTime));
    DAO.updateStory(projectId, newStoryItem);
    return this.getDashboard(projectId);
  },

  /**
   * Get dashboard data.
   * @param {Number} projectId
   * @return {DashboardDTO} dashboard
   */
  getDashboard(projectId) {
    const stories = DAO.getAllStories(projectId);
    const remainTimeForEachDay = DAO.getAllRemainTime();
    const taskBoard = {
      backlog: [],
      todo: [],
      processing: [],
      done: [],
    };
    stories.forEach((item) => {
      if (item.isChosen) {
        const { totalTime, remainTime, isBlocked } = item;
        if (remainTime === totalTime && !isBlocked) {
          taskBoard.todo.push(item);
        } else if (remainTime > 0) {
          taskBoard.processing.push(item);
        } else {
          taskBoard.done.push(item);
        }
      } else {
        taskBoard.backlog.push(item);
      }
    });
    return {
      taskBoard,
      remainTimeForEachDay,
    };
  },

  /**
   * Get all blocked stories.
   * @param projectId
   * @return {[Story]} blockedStoriesList
   */
  getBlockedStories(projectId) {
    return DAO.getBlockedStories(projectId);
  },
};

export default util.decorateApis('TaskMgr', TaskMgr);
