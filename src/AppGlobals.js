class AppGlobals {
  constructor() {
    let globalConfig;
    let globalKafkaProperties;
    let globalLog;

    this.getConfig = () => globalConfig;

    this.getKafkaProperties = () => globalKafkaProperties;

    this.getLog = () => globalLog;

    this.setConfig = (config) => {
      globalConfig = config;
    };

    this.setKafkaProperties = (kafkaProperties) => {
      globalKafkaProperties = kafkaProperties;
    };

    this.setLog = (log) => {
      globalLog = log;
    };
  }
}

module.exports = AppGlobals;
