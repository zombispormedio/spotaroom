const express = require('express');
const bodyParser = require('body-parser');
const serializeError = require('serialize-error');
const cors = require('cors');
const morgan = require('morgan');
const { useInjection } = require('../config/injection');
const { ServerNotRunningError } = require('../lib/errors');
const { useGraphql } = require('./graphql');
const { useRoutes } = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.get('/', (req, res) => {
  res.json({ ok: true });
});
useInjection(app);
useGraphql(app);
useRoutes(app);

/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  res.status(err.status || 500).json(serializeError(err));
});

let wrappedServer;

module.exports = {
  async start(port) {
    wrappedServer = await new Promise(resolve => {
      app.listen(port, function() {
        resolve(this);
      });
    });
  },

  stop() {
    if (!wrappedServer) {
      throw ServerNotRunningError();
    }
    wrappedServer.close();
  }
};
