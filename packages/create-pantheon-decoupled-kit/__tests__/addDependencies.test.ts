import * as actions from '../src/actions/index';
import fs from 'fs-extra';
import path from 'path';
import process from 'process';

vi.mock('inquirer');

const pkgPath = path.resolve(
	process.cwd(),
	'__tests__',
	'templates',
	'addDependencies',
	'package.json',
);

const globalData = {
	_: ['test-diff'],
	// 'workaround' for tests to work
	templateRootDir: `${process.cwd()}/__tests__/`,
	outDir: `${process.cwd()}/__tests__/templates/addDependencies`,
	force: false,
	silent: false,
};

const emptyPkgJson = {
	name: 'add-dependencies',
	version: '1.0.0',
	description: 'It should add dependencies',
	keywords: [],
	author: '',
	license: 'ISC',
};

describe('addWithDiff()', () => {
	beforeEach((context) => {
		fs.writeFileSync(pkgPath, JSON.stringify(emptyPkgJson));

		context.addDepsSpy = vi.spyOn(actions, 'addDependencies');
		context.readFileSpy = vi.spyOn(fs, 'readFileSync');
	});

	afterEach(() => {
		vi.restoreAllMocks();
		fs.unlinkSync(pkgPath);
	});

	it('should read from  the package.json of the outDir', ({
		addDepsSpy,
		readFileSpy,
	}) => {
		const data = Object.assign({}, globalData);
		actions.addDependencies({ data });
		expect(readFileSpy).toHaveBeenCalled();
		expect(readFileSpy).toHaveReturnedWith(JSON.stringify(emptyPkgJson));
		expect(addDepsSpy).toHaveBeenCalled();
	});

	it('should write to the package.json of the outDir with dependencies in `data`', ({
		addDepsSpy,
	}) => {
		const data = Object.assign(
			{ dependencies: { 'test-dep': '0.0.0' } },
			globalData,
		);
		actions.addDependencies({ data });
		const result = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
		expect(result.dependencies).toEqual(data.dependencies);
		expect(addDepsSpy).toHaveBeenCalled();
	});

	it('should write to the package.json of the outDir with devDependencies in `data`', ({
		addDepsSpy,
	}) => {
		const data = Object.assign(
			{ devDependencies: { 'test-dep': '0.0.0' } },
			globalData,
		);
		actions.addDependencies({ data });
		const result = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
		expect(result.devDependencies).toEqual(data.devDependencies);
		expect(addDepsSpy).toHaveBeenCalled();
	});

	it.fails('should throw an error if outDir is not valid', ({ addDepsSpy }) => {
		const data = Object.assign({}, globalData);
		data.outDir = '';
		actions.addDependencies({ data });
		expect(addDepsSpy).toThrowError('outDir is not valid');
	});

	it.fails(
		'should throw an error if package.json is not found in outDir',
		({ addDepsSpy }) => {
			const data = Object.assign({}, globalData);
			data.outDir = `${process.cwd()}/__tests__`;
			actions.addDependencies({ data });
			expect(addDepsSpy).toThrowError();
		},
	);
});
