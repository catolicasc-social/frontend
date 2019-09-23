/* eslint-disable no-param-reassign */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withPlugins(
  [
    [withSourceMaps],
    [
      optimizedImages,
      {
        handleImages: ['png', 'svg', 'ico'],
        optipng: {
          optimizationLevel: 3
        }
      }
    ]
  ],
  {
    target: 'serverless',
    webpack: (config, options) => {
      if (!options.isServer) {
        config.resolve.alias['@sentry/node'] = '@sentry/browser';
      }

      return config;
    }
  }
);
