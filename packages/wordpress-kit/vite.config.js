const path = require('path');

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'WordPressKit',
      fileName: format => `wordpress-kit.${format}.js`,
    },
  },
};
