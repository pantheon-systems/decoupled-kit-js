import * as bin from '../src/index';
import nodePlop from 'node-plop';
const { parseArgs, main } = bin;

describe('parseArgs()', () => {
	it('should parse args from the command line', () => {
		process.argv = [
			'node',
			'bin.js',
			'sample',
			'test',
			'--input',
			'test input',
			'--outDir',
			`${process.cwd()}/temp`,
			'--message',
			'test message',
			'--choice',
			'one',
			'--choice2',
			'four',
		];

		const parsedArgs = parseArgs();

		expect(parsedArgs._).toEqual(['sample', 'test']);
		expect(parsedArgs.input).toEqual('test input');
		expect(parsedArgs.outDir).toEqual(`${process.cwd()}/temp`);
		expect(parsedArgs.message).toEqual('test message');
		expect(parsedArgs.choice).toEqual('one');
		expect(parsedArgs.choice2).toEqual('four');
	});
});

describe('main()', () => {
	vi.mock('inquirer', () => ({
		default: {
			prompt: vi.fn(),
		},
	}));
	// vi.mock('bin', () => {
	// 	parseArgs: (args) => {}
	// })
	// vi.mock('node-plop', async () => {
	// 	const nodePlop = await vi.importActual('node-plop');
	// 	return nodePlop;
	// });
	it('should accept any number of positional arguments as generators to run', async () => {
		const logSpy = vi.spyOn(console, 'log');
		// const parseSpy = vi.spyOn(bin, 'parseArgs');
		const mainSpy = vi.spyOn(bin, 'main')
		process.argv = [
			'node',
			'bin.js',
			'test-add',
			'test-append',
			'not-valid',
			'--outDir',
			`${process.cwd()}/temp`,
		];
		// console.log('process.argv:', process.argv);

		await bin.main(bin.parseArgs(process.argv.slice(2)));
		// console.log('parseSpy', parseSpy.mock.lastCall);
		// expect(parseSpy).toBeCalled;
		// expect(parseSpy).toBeCalledWith(process.argv.slice(2));
		expect(mainSpy).toHaveBeenLastCalledWith({
			_: ['test-add', 'test-append', 'not-valid'],
			outDir: `${process.cwd()}/temp`,
			force: false,
			silent: false,
		});
		expect(logSpy).toBeCalledWith('No generator found with name not-valid');
	});
});
