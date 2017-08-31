var IntentFlowHandler = require('abbott-framework').IntentFlowHandler;

module.exports = class SampleHandlerIntent extends IntentFlowHandler {

  get userId() {
    return this.message.user;
  }

  constructor(controller, message, nlpPayload, bot) {
    super('abbott.sample.generic', controller, message, nlpPayload, bot);
  }
};

module.exports.isMatch = function (nlpPayload) {
  return (nlpPayload.result.action.startsWith('abbott.sample.generic')) ? true : false;
};