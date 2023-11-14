import { defineConfig } from '@playwright/test';

export default defineConfig({
	reporter: [['html', { open: 'never' }]],
});
