import { expect, test } from '@playwright/test';

test.describe('Drupal Search Addon', () => {
	test('The homepage snapshot has no regressions', async ({ page }) => {
		await page.goto('http://localhost:3000/');
		await expect(page).toHaveScreenshot({ fullPage: true });
	});

	test('The search bar works', async ({ page }) => {
		await page.goto('http://localhost:3000/');

		await page.getByPlaceholder('Search').click();
		await page.getByPlaceholder('Search').fill('milk');
		await page.getByLabel('Submit Search').click();
		await page.waitForURL('**/search/**');

		expect(
			await page.getByRole('heading', { name: 'Search Results' }).isVisible(),
		).toBe(true);
		expect(
			await page
				.getByRole('heading', {
					name: 'Dairy-free and delicious milk chocolate',
				})
				.isVisible(),
		).toBe(true);
		expect(
			await page
				.getByRole('heading', {
					name: 'Give your oatmeal the ultimate makeover',
				})
				.isVisible(),
		).toBe(true);
		expect(
			await page
				.getByRole('heading', {
					name: 'The real deal for supermarket savvy shopping',
				})
				.isVisible(),
		).toBe(true);
	});
});
