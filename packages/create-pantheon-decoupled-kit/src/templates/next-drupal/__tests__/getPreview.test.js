import { getPreview } from '../lib/getPreview';
import { globalDrupalStateStores } from '../lib/stores';

import defaultProfilePreview from './data/defaultProfilePreview.json';

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
		const defaultKey = '1_d4b52b83-e92a-4a4f-b2de-647ecb9fb6d0';
		const mockContext = {
			previewData: {
				previewLang: 'en',
				key: defaultKey,
			},
		};
		const params = await getPreview(mockContext, 'node--article', '');
		expect(params).toEqual('');
	});
	it('should set state if previewData is fetched successfully', async () => {
		const defaultKey = '1_d4b52b83-e92a-4a4f-b2de-647ecb9fb6d0';

		const mockContext = {
			previewData: {
				previewLang: 'en',
				key: defaultKey,
			},
		};
		await getPreview(mockContext, 'node--article', '');
		const dataFromState =
			globalDrupalStateStores[0].getState()['node--articleResources'][
				'd4b52b83-e92a-4a4f-b2de-647ecb9fb6d0'
			].data;
		expect(dataFromState).toEqual(defaultProfilePreview.data);
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
				`Failed to fetch JSON:API endpoint.\nTried fetching: https://default/jsonapi/decoupled-preview/xxxx\nServer responded with status code: 404`,
			);
		}
	});
});
