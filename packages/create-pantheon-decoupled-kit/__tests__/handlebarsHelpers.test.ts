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

describe('wpGraphqlHelper', () => {
	it('should append /wp/graphql on to the supplied string', () => {
		const input = 'https://my-cms-endpoint.pantheonsite.io';
		const result = hbsHelpers.wpGraphql(input);
		expect(result).toEqual(
			'https://my-cms-endpoint.pantheonsite.io/wp/graphql',
		);
	});
	it('should not append if the string already ends with /wp/graphql', () => {
		const input = 'https://my-cms-endpoint.pantheonsite.io/wp/graphql/';
		const result = hbsHelpers.wpGraphql(input);
		expect(result).toEqual(
			'https://my-cms-endpoint.pantheonsite.io/wp/graphql/',
		);
	});
});
