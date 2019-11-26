import util from '../util';

const data = {
  initBacklog: [
    {
      id: util.getId(),
      description: 'Users can exchange emails securely with predefined recipients.',
      totalTime: 24,
      remainTime: 24,
      isBlocked: false,
      isChosen: false,
    },
    {
      id: util.getId(),
      description: 'Users can send large files securely.',
      totalTime: 21,
      remainTime: 21,
      isBlocked: false,
      isChosen: false,
    },
    {
      id: util.getId(),
      description: 'Users can set time limits on emails for reading.',
      totalTime: 27,
      remainTime: 27,
      isBlocked: false,
      isChosen: false,
    },
    {
      id: util.getId(),
      description: 'Users can send emails securely to unspecified recipients.',
      totalTime: 30,
      remainTime: 30,
      isBlocked: false,
      isChosen: false,
    },
    {
      id: util.getId(),
      description: 'Administrators of organizations can monitor emails.',
      totalTime: 16,
      remainTime: 16,
      isBlocked: false,
      isChosen: false,
    },
    {
      id: util.getId(),
      description: 'Each organization can set security policies and define recipients groups.',
      totalTime: 24,
      remainTime: 24,
      isBlocked: false,
      isChosen: false,
    },
    {
      id: util.getId(),
      description: 'Users can manage their emails effectively.',
      totalTime: 43,
      remainTime: 43,
      isBlocked: false,
      isChosen: false,
    },
    {
      id: util.getId(),
      description: 'Users and administrators can backup emails securely.',
      totalTime: 23,
      remainTime: 23,
      isBlocked: false,
      isChosen: false,
    },
    {
      id: util.getId(),
      description: 'Users and administrators can delete emails completely.',
      totalTime: 36,
      remainTime: 36,
      isBlocked: false,
      isChosen: false,
    },
    {
      id: util.getId(),
      description: 'Users can access emails from mobile.',
      totalTime: 68,
      remainTime: 68,
      isBlocked: false,
      isChosen: false,
    },
    {
      id: util.getId(),
      description: 'Users can send short messages securely to each other.',
      totalTime: 28,
      remainTime: 28,
      isBlocked: false,
      isChosen: false,
    },
    {
      id: util.getId(),
      description: 'Users don’t want to receive spam-letters.',
      totalTime: 24,
      remainTime: 24,
      isBlocked: false,
      isChosen: false,
    },
  ],
  gotCards: [],
};

if (process && process.env.NODE_ENV === 'development') {
  window.GameData = data;
}

const DAO = {
  getInitialBacklog() {
    return data.initBacklog;
  },
  addCard(projectId, card) {
    data.gotCards.push(card);
  },
  getAllCards(projectId) {
    return data.gotCards;
  },
  updateCard(projectId, card) {
    util.findAndReplaceArrayItem(data.gotCards, card, 'id');
  },
};

export default DAO;
