import Game from '../Game';
import TaskMgr from '../TaskMgr';
import { CardType } from '../Game';

import util from '../util';

const groupSize = 3;
const numOfSprint = 5;
const numOfDayPreSprint = 3;

const groupId = TaskMgr.createGroup(new Array(groupSize).fill({}).map((item, index) => ({
  id: index, name: index.toString(), avatar: index.toString(),
})));
const projectId = TaskMgr.createProject({
  groupId,
  numOfSprint,
  numOfDayPreSprint,
});

Game.init(projectId);


while (true) {
  const { success, backlog } = TaskMgr.setToNextSprint(projectId);
  if (!success) {
    break;
  }
  const dashboard = TaskMgr.getDashboard(projectId);

  const todo = backlog.filter(() => Math.random() > 0.5).map(item => ({
    ...item,
    isChosen: true,
  })).concat(dashboard.taskBoard.processing);

  TaskMgr.saveTodo(projectId, todo);
  while (TaskMgr.setToNextDay(projectId)) {
    for (let memberNo = 0; memberNo < groupSize; memberNo++) {
      const { card } = Game.diceAndDrawCard(projectId, todo[util.getRandom(todo.length) - 1]);
      if (card.type === CardType.SOLUTION) {
        const blockedStories = TaskMgr.getBlockedStories(projectId);
        if (blockedStories.length) {
          Game.useCard(projectId, card, blockedStories[0]);
        }
      }
      TaskMgr.getDashboard(projectId);
      debugger;
    }
  }
}
