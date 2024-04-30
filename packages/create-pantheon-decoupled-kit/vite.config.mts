import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig(() => {
	return {
		plugins: [
			{
				// this plugin strips the dynamic import assertion from
				// runESLint, because vitest does not currently support them
				// even though vite does as of v3.
				// This can likely be removed once vitest has this support.
				name: 'remove-import-assertion',
				transform: (code) => {
					const replace =
						/const { default: pkg } = await import\(pkgPath, {[\n\t\s]*assert: { type: "json" }[\n\t\s]*}\)/gm;
					if (replace.test(code)) {
						// replace the import with type assertion
						// with dynamic import without type assertion
						return code.replace(
							replace,
							'const { default: pkg } = await import(pkgPath)',
						);
					}
					return code;
				},
			},
		],
		test: {
			globals: true,
			coverage: {
				reportsDirectory: `./coverage`,
				all: false,
			},
			include: ['./__tests__**/*.test.*'],
		},
		resolve: {
			alias: {
				'@cli': path.resolve(__dirname, './src'),
			},
		},
	};
});
