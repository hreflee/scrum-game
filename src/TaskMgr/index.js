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

class TaskMgr {
  /**
   * Create a group in system
   * @param {[People]} memberList
   * @return {Number} groupId
   */
  createGroup(memberList) {

  }

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

  }

  /**
   * Push the backlog into project
   * @param {Number} projectId
   * @param {[Story]} initBacklog
   * @return {DashboardDTO} dashboard
   */
  createBackLog(projectId, initBacklog) {

  }

  /**
   * Try set the project with projectId to the next sprint. If "the next sprint" exist, return true. If not, return false.
   * i.e. return whether the sprint before set is not the final sprint
   * @param {Number} projectId
   * @return {Boolean} isAllSprintEnd
   */
  setToNextSprint(projectId) {

  }

  /**
   * Save todo list for this sprint
   * @param {Number} projectId
   * @param {[Story]} todoList
   * @return {DashboardDTO} dashboard
   */
  saveTodo(projectId, todoList) {

  }

  /**
   * Try set the project with projectId to the next day in current sprint. If "the next day" exist, return true. If not, return false.
   * i.e. return whether the day before set is not the final day in current sprint
   * @param {Number} projectId
   * @return {Boolean} isSprintEnd
   */
  setToNextDay(projectId) {

  }

  /**
   * Update a story in current project
   * @param {Number} projectId
   * @param {Story} newStoryItem
   * @return {DashboardDTO} dashboard
   */
  updateStory(projectId, newStoryItem) {

  }
}

export default TaskMgr;
