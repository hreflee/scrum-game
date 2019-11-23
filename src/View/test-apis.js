import OrgGame from '../Game';
import OrgTaskMgr from '../TaskMgr';

const decorateApis = (name, apis) => {
  const decorated = {}
  Object.keys(apis).forEach((apiName) => {
    decorated[apiName] = function () {
      console.group(`call ${name}.${apiName}, args:`, ...arguments);
      const res = apis[apiName].call(apis, ...arguments);
      console.log('result:', res);
      console.groupEnd(`call ${name}.${apiName}`);
      return res;
    };
  });
  return decorated;
};

const Game = decorateApis('Game', OrgGame);
const TaskMgr = decorateApis('TaskMgr', OrgTaskMgr);
window.Game = Game;
window.TaskMgr = TaskMgr;

const groupId = TaskMgr.createGroup(new Array(3).map((item, index) => ({
  id: index, name: index.toString(), avatar: index.toString(),
})));
const projectId = TaskMgr.createProject({
  groupId,
  numOfSprint: 3,
  numOfDayPreSprint: 3,
});

Game.init(projectId);

const { backlog } = TaskMgr.setToNextSprint(projectId);
const todo = backlog.filter(() => Math.random() > 0.5).map(item => ({
  ...item,
  isChosen: true,
}));

TaskMgr.saveTodo(projectId, todo);

TaskMgr.setToNextDay(projectId);

Game.dice(projectId);

Game.drawCard(projectId);

todo[0].isBlocked = true;
todo[0].isChosen = true;
TaskMgr.updateStory(projectId, todo[0]);
