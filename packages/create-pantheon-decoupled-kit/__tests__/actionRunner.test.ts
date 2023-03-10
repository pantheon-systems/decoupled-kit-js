import * as utils from '../src/utils';
import * as actions from '../src/actions';
const { addWithDiff, runInstall, runLint } = actions;

vi.mock('../src/actions', () => ({
	addWithDiff: vi.fn(),
	runInstall: vi.fn(),
	runLint: vi.fn(),
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

const globalData = {
	_: ['test-diff'],
	anotherInput: 'Testing the diff',
	diffInput: 'this line will be rendered to the template',
	// 'workaround' for tests to work
	templateRootDir: `${process.cwd()}/__tests__/`,
	outDir: `test`,
	force: false,
	silent: false,
};

describe('actionRunner()', () => {
	beforeEach((context) => {
		context.actionRunnerSpy = vi.spyOn(utils, 'actionRunner');
	});
	afterEach(() => {
		vi.restoreAllMocks();
	});
	it('should run the actions provided', async ({ actionRunnerSpy }) => {
		const result = await utils.actionRunner({
			actions: [addWithDiff, runInstall, runLint],
			data: globalData,
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
		async ({ actionRunnerSpy }) => {
			vi.mocked(addWithDiff).mockImplementationOnce(() => {
				throw new Error('outDir is not valid');
			});
			const data = Object.assign({}, globalData);
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
		},
	);
});
