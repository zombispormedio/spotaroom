const { createContainer, asFunction } = require('awilix');
const { HomecardService } = require('../app/services');
const { apiUrl } = require('.');

const container = createContainer();

container.register({
  homecardService: asFunction(HomecardService)
    .scoped()
    .inject(() => ({ apiUrl }))
});

exports.useInjection = app => {
  app.use((req, res, next) => {
    req.scope = container.createScope();
    next();
  });
};
