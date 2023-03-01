import { hbsHelpers } from '../src/utils/index';

describe('pkgNameHelper', () => {
	it('should not transform a valid package.json name', () => {
		const name = '@valid-org/valid-package-name';
		const result = hbsHelpers.pkgName(name);
		expect(result).toEqual(name);
	});
	it('should transform an invalid package.json name', () => {
		const name = 'Invalid packageName_test';
		const result = hbsHelpers.pkgName(name);
		expect(result).toEqual('invalid-package-name-test');
	});
});
