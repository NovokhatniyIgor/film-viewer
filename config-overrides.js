// @ts-ignore
const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      'src': path.resolve(__dirname, 'src'),
      'api': path.resolve(__dirname, 'src/api'),
      'modules': path.resolve(__dirname, 'src/modules'),
      'services': path.resolve(__dirname, 'src/services'),
      'routing': path.resolve(__dirname, 'src/routing')
    },
  };
return config;
};