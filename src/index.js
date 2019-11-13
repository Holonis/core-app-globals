class Globals {
  constructor() {
    let globalConfig;
    let globalLog;

    this.getConfig = () => globalConfig;

    this.getLog = () => globalLog;

    this.setConfig = (config) => {
      globalConfig = config;
    };

    this.setLog = (log) => {
      globalLog = log;
    };
  }
}

module.exports = new Globals();
