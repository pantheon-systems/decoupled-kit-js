import { test, expect } from '@playwright/test';

test.describe('Next WP ACF Add-on', () => {
	test('The homepage snapshot has no regressions', async ({ page }) => {
		await page.goto('http://localhost:3000/');
		await expect(page).toHaveScreenshot({ fullPage: true });
	});

	test('The content has related content', async () => {});
});
