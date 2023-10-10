import { test, expect } from '@playwright/test';

test.describe('Gatsby WP ACF Add-on', () => {
	test('The homepage snapshot has no regressions', async ({ page }) => {
		await page.goto('http://localhost:8000/');
		await expect(page).toHaveScreenshot({ fullPage: true });
	});

	test('The content has related content', async () => {});
});
