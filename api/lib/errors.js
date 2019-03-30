exports.ServerNotRunningError = class ServerNotRunningError extends Error {
  constructor() {
    super('Server not running');
  }
};
