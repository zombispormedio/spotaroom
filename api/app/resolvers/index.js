const { combineResolvers } = require('apollo-resolvers');
const HomeCardsResolvers = require('./homecard.resolvers');

const DefaultResolvers = {
  Query: {
    graphql: () => true
  }
};

module.exports = combineResolvers([DefaultResolvers, HomeCardsResolvers]);
