let idCount = -1;
const util = {
  getRandom(range) {
    const pow = Math.ceil(Math.log10(range));
    return Math.round(Math.random() * (10 ** pow)) % range + 1;
  },
  getId() {
    return ++idCount;
  },
  findAndReplaceArrayItem(array, item, eqCondition) {
    let judge = null;
    switch (typeof eqCondition) {
      case 'string': {
        judge = arrItem => arrItem[eqCondition] === item[eqCondition];
        break;
      }
      case 'function': {
        judge = arrItem => eqCondition(arrItem, item);
        break;
      }
      default:
    }

    const arrIndex = array.findIndex(judge);
    if (arrIndex >= 0) {
      array[arrIndex] = item;
    }
  },
  decorateApis(name, apis) {
    if (process && process.env.NODE_ENV === 'development') {
      const decorated = {};
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
    }
    return apis;
  },
};

export default util;
