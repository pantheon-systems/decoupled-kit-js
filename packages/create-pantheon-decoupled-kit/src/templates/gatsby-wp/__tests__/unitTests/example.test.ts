import { getPaginationPaths } from '../../lib/createPagesUtils';

/**
 * Vitest can also be used for unit tests
 */
describe('getPaginationPaths', () => {
	it('returns the base route + page number if the page number is > 0', () => {
		const result = getPaginationPaths({ page: 4, route: 'test' });
		expect(result).toEqual('/test/4');
	});
	it('returns the base route if the page number is not =< 0', () => {
		const result = getPaginationPaths({ page: 0, route: 'test' });
		expect(result).toEqual('/test');
	});
});
