const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../app/schemas');
const resolvers = require('../app/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    scope: req.scope
  })
});

module.exports = {
  useGraphql(app) {
    server.applyMiddleware({ app });
  }
};
