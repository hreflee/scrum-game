import util from '../util';

const data = {
  projectStatus: {
    config: {
      numOfSprint: 0,
      numOfDayPreSprint: 0,
    },
    current: {
      sprintNo: 0,
      dayNo: 0,
    },
  },
  stories: [],
  remainTimeForEachDay: [],
};

const DAO = {
  createProject(groupId, numOfSprint, numOfDayPreSprint) {
    data.projectStatus.config = { numOfSprint, numOfDayPreSprint };
    data.projectStatus.current = { sprintNo: 0, dayNo: 0 };
    data.stories = [];
    data.remainTimeForEachDay = [];
    return util.getRandom(100);
  },
  setProjectCurrentStatus(projectId, sprintNo, dayNo) {
    data.projectStatus.current = { sprintNo, dayNo };
  },
  getProjectConfig(projectId) {
    return data.projectStatus.config;
  },
  getProjectCurrentStatus(projectId) {
    return data.projectStatus.current;
  },

  reloadStoriesList(projectId, stories) {
    data.stories = stories.map((item, index) => ({
      ...item,
      id: index,
    }));
  },

  getAllStories(projectId) {
    return data.stories;
  },

  updateStory(projectId, storyItem) {
    const dataIndex = data.stories.findIndex(item => item.id === storyItem.id);
    if (dataIndex >= 0) {
      data.stories[dataIndex] = storyItem;
    }
  },

  updateStories(projectId, updateStoryList) {
    const updateStoryId2Index = updateStoryList.reduce((reducer, item, index) => Object.assign(reducer, { [item.id]: index }), {});
    data.stories.forEach((storyItem, storyIndex) => {
      const updateStoryIndex = updateStoryId2Index[storyItem.id];
      if (updateStoryIndex !== undefined) {
        data.stories[storyIndex] = updateStoryList[updateStoryIndex];
      }
    });
  },

  getBacklog(projectId) {
    return data.stories.filter(item => !item.isChosen);
  },
  pushRemainTime(projectId, todayRemainTime) {
    data.remainTimeForEachDay.push(todayRemainTime);
  },
  getAllRemainTime(projectId) {
    return data.remainTimeForEachDay;
  },
};

if (process && process.env.NODE_ENV === 'development') {
  console.log('TaskMgr data', data);
}

export default DAO;
