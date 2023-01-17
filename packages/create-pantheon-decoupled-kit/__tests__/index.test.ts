import { parseArgs, main } from '../src/index';
describe('parseArgs()', () => {
	it('should parse args from the command line', () => {
		const args = [
			'node',
			'bin.ts',
			'sample',
			'test',
			'--input',
			'test input',
			'--outDir',
			`${process.cwd()}/temp/test.js`,
			'--message',
			'test message',
			'--choice',
			'one',
			'--choice2',
			'four',
		];

		const parsedArgs = parseArgs(args.slice(2));

		expect(parsedArgs._).toEqual(['sample', 'test']);
		expect(parsedArgs.input).toEqual('test input');
		expect(parsedArgs.outDir).toEqual(`${process.cwd()}/temp/test.js`);
		expect(parsedArgs.message).toEqual('test message');
		expect(parsedArgs.choice).toEqual('one');
		expect(parsedArgs.choice2).toEqual('four');
	});
});
