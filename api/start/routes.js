const { HomeCardsRoutes } = require('../app/routes');

module.exports = {
  useRoutes(app) {
    app.use('/api/homecards', HomeCardsRoutes);
  }
};
