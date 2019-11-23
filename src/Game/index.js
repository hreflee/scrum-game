import TaskMgr from '../TaskMgr';

import DAO from './DAO';

import util from '../util';

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

const Game = {
  /**
   * Initialize a game in TaskMgr with projectId
   * @param {Number} projectId
   * @return {DashboardDTO} dashboard
   */
  init(projectId) {
    return TaskMgr.createBackLog(projectId, DAO.getInitialBacklog());
  },

  /**
   * Dice to get work time for current member
   * @param {Number} projectId
   * @return {Number} workTime
   */
  dice(projectId) {
    return util.getRandom(6);
  },

  /**
   * Draw a card for current member in the remaining cards
   * @param {Number} projectId
   * @return {Card} card
   */
  drawCard(projectId) {
    let type = util.getRandom(3);
    let card = {
      id: util.getRandom(100),
      type,
      timeDelta: 0,
      description: '',
    };
    if (type === CardType.EVENT) {
      card.timeDelta = (-1) ** (util.getRandom(2)) * util.getRandom(5);
      card.description = `You ${card.timeDelta > 0 ? 'gain' : 'loss'} ${Math.abs(card.timeDelta)} hour(s) working time today.`;
    } else {
      const descMap = {
        [CardType.PROBLEM]: 'You met some problem today. The story you are working on will be blocked.',
        [CardType.SOLUTION]: 'You got a solution. You can unblock a story.',
      };
      card.description = descMap[type];
    }
    return card;
  },
};

export default Game;
export { CardType };
