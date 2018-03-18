module.exports = function(plop, config) {
  require('./modules')(plop, config);
  require('./component')(plop, config);
  require('./container')(plop, config);
  require('./reducer')(plop, config);
  require('./saga')(plop, config);

  plop.setHelper('toString', v => `${v}`);

  return plop;
};
