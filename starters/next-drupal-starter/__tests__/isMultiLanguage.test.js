import { isMultiLanguage } from '../lib/isMultiLanguage';

describe('isMultiLanguage()', () => {
	it('should return true if there are multiple locales', () => {
		const result = isMultiLanguage(['en', 'es']);
		expect(result).toBe(true);
	});
	it('should return false if there is one locale', () => {
		const result = isMultiLanguage(['es']);
		expect(result).toBe(false);
	});
});
