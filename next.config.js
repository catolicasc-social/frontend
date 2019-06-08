const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins(
  [
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
    target: 'serverless'
  }
);
