import { resolveDotenvFile } from '../src/utils/resolveDotenvFile';

const cwd = process.cwd();

describe('resolveDotenvFile()', () => {
	it('should return undefined and log a message if no .env file is found', () => {
		vi.spyOn(process, 'cwd').mockImplementation(
			() => `${cwd}/__tests__/fixtures/noDotenv`,
		);
		const logSpy = vi.spyOn(console, 'log');
		const result = resolveDotenvFile();
		expect(result).toEqual(undefined);
		expect(logSpy).toHaveBeenCalledWith(
			'No .env* file found, assuming production environment.',
		);
	});

	it('should return the path to the .env file if one is found', () => {
		vi.spyOn(process, 'cwd').mockImplementation(
			() => `${cwd}/__tests__/fixtures/dotenv`,
		);
		const result = resolveDotenvFile();
		expect(result).toEqual(`${cwd}/__tests__/fixtures/dotenv/.env`);
	});

	it('should return the path to the .env.development.local file if one is found', () => {
		vi.spyOn(process, 'cwd').mockImplementation(
			() => `${cwd}/__tests__/fixtures/dotenvDev`,
		);
		const result = resolveDotenvFile();
		expect(result).toEqual(
			`${cwd}/__tests__/fixtures/dotenvDev/.env.development.local`,
		);
	});
});
