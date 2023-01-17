import esbuild from 'esbuild';

try {
	await esbuild.build({
		entryPoints: ['./src/bin.ts'],
		bundle: true,
		platform: 'node',
		packages: 'external',
		outdir: 'dist',
		format: 'esm',
		minify: true,
	});
	console.log('Build Successful');
} catch (error) {
	console.error('Something went wrong: ', error);
}
