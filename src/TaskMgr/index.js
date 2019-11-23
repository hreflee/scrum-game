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
  },

  /**
   * Try set the project with projectId to the next sprint.
   * If "the next sprint" exist, return true. If not, return false.
   * i.e. return whether the sprint before set is not the final sprint
   * @param {Number} projectId
   * @return {NextSprintStatusDTO} nextSprintStatus
   *
   * @typedef {Object} NextSprintStatusDTO
   * @property {Boolean} isAllSprintEnd
   * @property {[Story]} backlog
   */
  setToNextSprint(projectId) {
    const { numOfSprint } = DAO.getProjectConfig(projectId);
    const { sprintNo } = DAO.getProjectCurrentStatus(projectId);
    if (sprintNo < numOfSprint) {
      const backlog = DAO.getBacklog(projectId);
      DAO.setProjectCurrentStatus(projectId, sprintNo + 1, 0);
      return {
        isAllSprintEnd: false,
        backlog,
      };
    }
    return {
      isAllSprintEnd: true,
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
    return this._createBacklog(projectId);
  },

  /**
   * Try set the project with projectId to the next day in current sprint.
   * If "the next day" exist, return true. If not, return false.
   * i.e. return whether the day before set is not the final day in current sprint
   * @param {Number} projectId
   * @return {Boolean} isSprintEnd
   */
  setToNextDay(projectId) {
    const { numOfDayPreSprint } = DAO.getProjectConfig(projectId);
    const { sprintNo, dayNo } = DAO.getProjectCurrentStatus(projectId);
    if (dayNo < numOfDayPreSprint) {
      DAO.setProjectCurrentStatus(projectId, sprintNo, dayNo + 1);
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
    DAO.updateStory(projectId, newStoryItem);
    return this._createBacklog(projectId);
  },

  _createBacklog(projectId) {
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
};

export default TaskMgr;
