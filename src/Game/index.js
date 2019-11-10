import TaskMgr from '../TaskMgr';

/**
 * @typedef {Object} Card
 * @property {Number} id
 * @property {Number} type
 * @property {Number} timeDelta
 * @property {String} description
 */

/**
 * @enum {Number}
 */
const CardType = {
  EVENT: 1,
  PROBLEM: 2,
  SOLUTION: 3,
};

class Game {
  /**
   * Initialize a game in TaskMgr with projectId
   * @param {Number} projectId
   * @return {DashboardDTO} dashboard
   */
  init(projectId) {

  }

  /**
   * Dice to get work time for current member
   * @param {Number} projectId
   * @return {Number} workTime
   */
  dice(projectId) {

  }

  /**
   * Draw a card for current member in the remaining cards
   * @param {Number} projectId
   * @return {Card} card
   */
  drawCard(projectId) {

  }
}

export default Game;
export { CardType };
