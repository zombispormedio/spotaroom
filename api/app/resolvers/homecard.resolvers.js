const { baseResolver } = require('../../lib/utils');

module.exports = {
  Query: {
    homecards: baseResolver.createResolver((parent, params, { scope }) => {
      const homecardService = scope.resolve('homecardService');
      return homecardService.getRelevantHomeCards(params);
    })
  }
};
