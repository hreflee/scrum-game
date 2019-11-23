const util = {
  getRandom(range) {
    let pow = Math.ceil(Math.log10(range));
    return Math.round(Math.random() * (10 ** pow)) % range + 1;
  }
};

export default util;
