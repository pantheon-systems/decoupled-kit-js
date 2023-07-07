import { checkDecoupledRouter } from '../src/utils/checkDecoupledRouter';

describe('checkDecoupledRouter()', async () => {
	it('should return true if the decoupled router is valid (with umami)', async () => {
		const result = await checkDecoupledRouter({
			cmsEndpoint: new URL('https://umami.drupal.test'),
			hasUmami: true,
		});

		expect(result).toEqual(true);
	});

	it('should return true if the decoupled router is valid (without umami)', async () => {
		const result = await checkDecoupledRouter({
			cmsEndpoint: new URL('https://drupal.test'),
			hasUmami: false,
		});

		expect(result).toEqual(true);
	});

	it('should return false if the decoupled router is valid (without umami)', async () => {
		const result = await checkDecoupledRouter({
			cmsEndpoint: new URL('https://invalid.drupal.test'),
			hasUmami: false,
		});

		expect(result).toEqual(false);
	});
});
