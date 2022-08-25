import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    test: {
      globals: true,
      coverage: {
        reportsDirectory: `./coverage`,
      },
    },
    plugins: [react()],
  };
});
