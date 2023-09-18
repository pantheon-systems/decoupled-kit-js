import process from 'process';
import * as actions from '../src/actions';
import * as utils from '../src/utils';
import { sharedTestData } from './sharedTestData';

const { addWithDiff, runInstall, runLint } = actions;

vi.mock('../src/actions', () => ({
	addWithDiff: vi.fn(),
	runInstall: vi.fn(),
	runLint: vi.fn(),
	addDependencies: vi.fn(),
}));

const templateData = [
	{
		addon: false,
		templateDirs: [`${process.cwd()}/__tests__/templates/addWithDiff`],
	},
];

const handlebars = await utils.getHandlebarsInstance(
	`${process.cwd()}/__tests__/`,
);

describe('actionRunner()', () => {
	beforeEach((context) => {
		context.actionRunnerSpy = vi.spyOn(utils, 'actionRunner');
		context.processSpy = vi
			.spyOn(process, 'exit')
			.mockImplementationOnce(vi.fn());
	});
	afterEach(() => {
		vi.restoreAllMocks();
	});
	it('should run the actions provided', async ({ actionRunnerSpy }) => {
		const result = await utils.actionRunner({
			actions: [addWithDiff, runInstall, runLint],
			data: sharedTestData,
			templateData,
			handlebars,
		});
		expect(result).toEqual('All actions successfully completed.');
		expect(addWithDiff).toHaveBeenCalledOnce();
		expect(runInstall).toHaveBeenCalledOnce();
		expect(runLint).toHaveBeenCalledOnce();
		expect(actionRunnerSpy).toHaveBeenCalledOnce();
	});

	it.fails(
		'should throw an error if an action throws an error',
		async ({ actionRunnerSpy, processSpy }) => {
			vi.mocked(addWithDiff).mockImplementationOnce(() => {
				throw new Error('outDir is not valid');
			});
			const data = Object.assign({}, sharedTestData);
			data.outDir = '';

			await utils.actionRunner({
				actions: [addWithDiff, runInstall, runLint],
				data,
				templateData,
				handlebars,
			});
			expect(addWithDiff).toThrowErrorMatchingInlineSnapshot(
				'outDir is not valid',
			);
			expect(actionRunnerSpy).toThrowError();
			expect(runInstall).toHaveBeenCalledTimes(0);
			expect(runLint).toHaveBeenCalledTimes(0);
			expect(actionRunnerSpy).toHaveBeenCalledOnce();
			expect(processSpy).toHaveBeenCalledWith(1);
		},
	);
});
