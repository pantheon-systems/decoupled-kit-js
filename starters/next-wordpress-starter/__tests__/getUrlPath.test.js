import { getUrlPath } from '../lib/getUrlPath';

describe('getUrlPath', () => {
	it('should extract the pathname from a URL', () => {
		const fullUrl = new URL(
			'https://dev-ds-demo.pantheon/app/uploads/2022/08/IMG_1269_Original-scaled.jpg',
		);

		const result = getUrlPath(fullUrl);

		expect(result).toEqual('/app/uploads/2022/08/IMG_1269_Original-scaled.jpg');
	});
	it('should extract the pathname from a string', () => {
		const fullUrl =
			'https://dev-ds-demo.pantheon/app/uploads/2022/08/IMG_1269_Original-scaled.jpg';

		const result = getUrlPath(fullUrl);

		expect(result).toEqual('/app/uploads/2022/08/IMG_1269_Original-scaled.jpg');
	});
});
