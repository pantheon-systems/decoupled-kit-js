const path = require('path');

module.exports = {
  optimizeDeps: {
    include: ['@gdwc/drupal-state'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'DrupalKit',
      fileName: format => `drupal-kit.${format}.js`,
    },
  },
};
