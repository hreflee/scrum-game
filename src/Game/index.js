import TaskMgr from '../TaskMgr';

import DAO from './DAO';

import util from '../util';

/**
 * @typedef {Object} Card
 * @property {Number} id
 * @property {Number} type
 * @property {Number} timeDelta
 * @property {Boolean} isUsed
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

const MAX_WORK_TIME_A_DAY = 12;

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
    return util.getRandom(MAX_WORK_TIME_A_DAY);
  },

  /**
   * Draw a card for current member in the remaining cards
   * @param {Number} projectId
   * @return {Card} card
   */
  drawCard(projectId) {
    const type = util.getRandom(3);
    let card = {
      id: util.getId(),
      type,
      timeDelta: 0,
      isUsed: false,
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
    DAO.addCard(projectId, card);
    return card;
  },

  /**
   * Dice and draw a card, and apply the card to story if necessary.
   * If got a EVENT card, use the card immediately.
   * If got a PROBLEM card and at least one SOLUTION card got in data,
   * use the SOLUTION card immediately.
   * If got a SOLUTION card, return to user and store the card.
   * @param {Number} projectId
   * @param {Story} story
   * @return {DiceAndDrawCardResultDTO} diceAndDrawResult
   *
   * @typedef {Object} DiceAndDrawCardResultDTO
   * @property {Number} workTime
   * @property {Card} card
   * @property {String} hint
   */
  diceAndDrawCard(projectId, story = null) {
    const workTime = this.dice(projectId);
    const card = this.drawCard(projectId);
    let workedStory = story;
    if (story && !story.isBlocked) {
      workedStory = {
        ...story,
        remainTime: story.remainTime - workTime,
      };
      TaskMgr.updateStory(projectId, workedStory);
    }
    switch (card.type) {
      case CardType.EVENT: {
        story && this.useCard(projectId, card, workedStory, -workTime);
        return {
          workTime,
          card,
          hint: 'You got a EVENT card. Your work time today will be changed.',
        };
      }
      case CardType.SOLUTION: {
        const blockedStories = TaskMgr.getBlockedStories(projectId);
        return {
          workTime,
          card,
          hint: blockedStories.length
            ? 'You got a SOLUTION card. You can unblock a story.'
            : 'You got a SOLUTION card. The story won\'t be blocked when you or your teammate get a PROBLEM card the next time.',
        };
      }
      case CardType.PROBLEM: {
        const allGotCard = DAO.getAllCards(projectId);
        const firstSolutionCard = allGotCard.find(item => item.type === CardType.SOLUTION && !item.isUsed);
        story && this.useCard(projectId, card, workedStory);
        if (firstSolutionCard) {
          this.useCard(projectId, firstSolutionCard, workedStory);
          return {
            workTime,
            card,
            hint: 'You got a PROBLEM card. But you or your teammate got a SOLUTION card before. This PROBLEM card will not work and one SOLUTION card will be used.',
          };
        }
        return {
          workTime,
          card,
          hint: 'You got a PROBLEM card. The story you working on will be blocked',
        };
      }
    }
  },

  /**
   * Use a card on story.
   * @param {Number} projectId
   * @param {Card} card
   * @param {Story} story
   * @param {Number} minTimeDelta
   */
  useCard(projectId, card, story, minTimeDelta = -MAX_WORK_TIME_A_DAY - 1) {
    DAO.updateCard(projectId, {
      ...card,
      isUsed: true,
    });
    switch (card.type) {
      case CardType.EVENT: {
        const timeDelta = Math.max(card.timeDelta, minTimeDelta);
        TaskMgr.updateStory(projectId, {
          ...story,
          remainTime: story.remainTime - timeDelta,
        });
        return;
      }
      case CardType.SOLUTION: {
        TaskMgr.updateStory(projectId, {
          ...story,
          isBlocked: false,
        });
        return;
      }
      case CardType.PROBLEM: {
        TaskMgr.updateStory(projectId, {
          ...story,
          isBlocked: true,
        });
        return;
      }
    }
  },
};

export default util.decorateApis('Game', Game);
export { CardType };
