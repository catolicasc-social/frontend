/* eslint-disable global-require */

require('dotenv').load();

const expressSession = require('express-session');
const nextAuthProviders = require('./next-auth.providers');
const nextAuthFunctions = require('./next-auth.functions');

let sessionStore;

module.exports = () => {
  return nextAuthFunctions().then(functions => {
    return new Promise(resolve => {
      resolve({
        sessionSecret: 'change-me',
        sessionMaxAge: 60000 * 60 * 24 * 7,
        sessionRevalidateAge: 60000,
        serverUrl: process.env.SERVER_URL || null,
        expressSession,
        sessionStore,
        providers: nextAuthProviders(),
        functions
      });
    });
  });
};
