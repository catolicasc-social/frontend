/* eslint-disable global-require */

require('dotenv').load();

module.exports = () => {
  const providers = [];

  if (process.env.GOOGLE_ID && process.env.GOOGLE_SECRET) {
    providers.push({
      providerName: 'Google',
      providerOptions: {
        scope: ['profile', 'email']
      },
      Strategy: require('passport-google-oauth').OAuth2Strategy,
      strategyOptions: {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      },
      getProfile(profile) {
        return {
          id: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value
        };
      }
    });
  }

  return providers;
};
