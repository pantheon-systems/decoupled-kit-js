import { test, expect } from '@playwright/test';

test.describe('Next WP ACF Add-on', () => {
	test('The homepage snapshot has no regressions', async ({ page }) => {
		await page.goto('http://localhost:3000/');
		await expect(page).toHaveScreenshot({ fullPage: true });
	});

	test('The content has related content', async ({ page }) => {
		await page.goto('http://localhost:3000/');
		await page
			.getByRole('link', { name: 'Example Post with Related Content →' })
			.click();

		expect(
			await page
				.getByRole('heading', { name: 'Example Post with Related Content' })
				.isVisible(),
		).toBe(true);

		const examplePostContent = page.getByText(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i',
		);
		await examplePostContent.scrollIntoViewIfNeeded();

		expect(await examplePostContent.isVisible()).toBe(true);

		const relatedContentHeading = page.getByRole('heading', {
			name: 'Related Content',
			exact: true,
		});
		await relatedContentHeading.scrollIntoViewIfNeeded();

		expect(await relatedContentHeading.isVisible()).toBe(true);

		const relatedContentLink = page.getByRole('link', {
			name: 'Example Post with Image Example Post with Image →',
		});
		await relatedContentLink.scrollIntoViewIfNeeded();
		await relatedContentLink.click();

		const relatedExamplePostHeading = page.getByRole('heading', {
			name: 'Example Post with Image',
		});
		expect(await relatedExamplePostHeading.isVisible()).toBe(true);

		const relatedExamplePostImage = page.getByRole('img', {
			name: 'Example Post with Image',
		});
		expect(await relatedExamplePostImage.isVisible()).toBe(true);

		const relatedExamplePostContent = page.getByText(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i',
		);
		expect(await relatedExamplePostContent.isVisible()).toBe(true);
	});
});
