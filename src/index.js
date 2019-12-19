const AppGlobals = require('./AppGlobals');

global.___appGlobals = global.___appGlobals || new AppGlobals();

module.exports = global.___appGlobals;
