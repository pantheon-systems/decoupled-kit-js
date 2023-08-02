import { getPreview } from '../lib/getPreview';
import { globalDrupalStateStores } from '../lib/stores';

import umamiPreview from './data/umamiPreview.json';

describe('getPreview()', () => {
	it('should return preview parameters if there is a revision in the preview data', async () => {
		const mockContext = {
			previewData: {
				resourceVersionId: '123',
				previewLang: 'en',
			},
		};
		const params = await getPreview(
			mockContext,
			'node--article',
			'includes=field_media_image.field_media_image',
		);
		expect(params).toEqual(
			'includes=field_media_image.field_media_image&resourceVersion=id:123',
		);
	});
	it(`should set params if params are undefined and previewing a revision`, async () => {
		const mockContext = {
			previewData: {
				previewLang: 'en',
				resourceVersionId: '123',
			},
		};
		const params = await getPreview(mockContext, 'node--article');
		expect(params).toEqual('resourceVersion=id:123');
	});
	it('should not modify parameters if there is no revision in previewData', async () => {
		const umamiKey = '1_00517b73-f66c-43eb-93b1-444a68ab97d8';
		const mockContext = {
			previewData: {
				previewLang: 'en',
				key: umamiKey,
			},
		};
		const params = await getPreview(mockContext, 'node--article', '');
		expect(params).toEqual('');
	});
	it('should set state if previewData is fetched successfully', async () => {
		const umamiKey = '1_00517b73-f66c-43eb-93b1-444a68ab97d8';

		const mockContext = {
			previewData: {
				previewLang: 'en',
				key: umamiKey,
			},
		};
		await getPreview(mockContext, 'node--article', '');

		const dataFromState =
			globalDrupalStateStores[0].getState()['node--articleResources'][
				'00517b73-f66c-43eb-93b1-444a68ab97d8'
			].data;
		expect(dataFromState).toEqual(umamiPreview.data);
	});
	it('should preview data for the non-default language', async () => {
		const previewKey = '12';

		const mockContext = {
			previewData: {
				previewLang: 'es',
				key: previewKey,
			},
		};
		const params = await getPreview(mockContext, 'node--article', '');
		expect(params).toEqual('');
	});
	it('should throw an error if the previewKey is invalid', async () => {
		const previewKey = 'xxxx';
		const mockContext = {
			previewData: {
				previewLang: 'en',
				key: previewKey,
			},
		};

		try {
			await getPreview(mockContext, 'node--article', '');
		} catch (error) {
			expect(error.message).toEqual(
				`Failed to fetch JSON:API endpoint.\nTried fetching: https://umami/en/jsonapi/decoupled-preview/xxxx\nServer responded with status code: 404`,
			);
		}
	});
});
