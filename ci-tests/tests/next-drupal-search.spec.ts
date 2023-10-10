import { test, expect } from '@playwright/test';

test('basic regression test', async ({ page }) => {});

test.describe('Drupal Search Addon', () => {
	test('The homepage snapshot has no regressions', async ({ page }) => {
		await page.goto('http://localhost:3000/');
		await expect(page).toHaveScreenshot({ fullPage: true });
	});

	test("The search bar exists", async() =>{})
	test("The search bar works", async() =>{})
});
