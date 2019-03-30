const { createResolver } = require('apollo-resolvers');
const serializeError = require('serialize-error');
const { ApolloError } = require('apollo-server-express');

exports.asPromiseWithErrorHandler = controller => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (err) {
    next(err);
  }
};

exports.baseResolver = createResolver(null, (root, args, context, error) =>
  error instanceof ApolloError
    ? error
    : new ApolloError(
        'Somethins wrong happens...',
        'UNKNOWN_ERROR',
        serializeError(error)
      )
);
