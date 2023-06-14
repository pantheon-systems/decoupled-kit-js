import { taggedTemplateHelpers as helpers } from '../src/utils/index';

describe('if', () => {
	it('should return the value if the condition is true', () => {
		const value = 'Some string here';
		const result = helpers.if(true, value);
		expect(result).toEqual(value);
	});
	it('should return an empty string if the condition is false', () => {
		const value = 'This is only a test.';
		const result = helpers.if(false, value);
		expect(result).toEqual('');
	});
});

describe('pkgNameHelper', () => {
	it('should not transform a valid package.json name', () => {
		const name = '@valid-org/valid-package-name';
		const result = helpers.pkgName(name);
		expect(result).toEqual(name);
	});
	it('should transform an invalid package.json name', () => {
		const name = 'Invalid packageName_test';
		const result = helpers.pkgName(name);
		expect(result).toEqual('invalid-package-name-test');
	});
	it.fails('should throw an error if the value is not a string', () => {
		const name = {};
		const result = helpers.pkgName(name);
		expect(result).toThrowError();
	});
});

describe('backticks', () => {
	it('should return the value wrapped in backticks', () => {
		const value = '"some value"';
		const result = helpers.backticks(value);
		expect(result).toEqual('`"some value"`');
	});
});

describe('wpGraphqlHelper', () => {
	it('should append /wp/graphql on to the supplied string', () => {
		const input = 'https://my-cms-endpoint.pantheonsite.io';
		const result = helpers.wpGraphql(input);
		expect(result).toEqual(
			'https://my-cms-endpoint.pantheonsite.io/wp/graphql',
		);
	});
	it('should not append if the string already ends with /wp/graphql', () => {
		const input = 'https://my-cms-endpoint.pantheonsite.io/wp/graphql/';
		const result = helpers.wpGraphql(input);
		expect(result).toEqual(
			'https://my-cms-endpoint.pantheonsite.io/wp/graphql/',
		);
	});
});
