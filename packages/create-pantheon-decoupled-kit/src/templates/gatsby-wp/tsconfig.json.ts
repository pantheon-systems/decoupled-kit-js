const json = () => /* JSON */ `{
	"compilerOptions": {
		"target": "esnext",
		"lib": ["dom", "esnext"],
		"types": ["vitest/globals"],
		"jsx": "react-jsx",
		"module": "esnext",
		"moduleResolution": "node",
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"strict": true,
		"skipLibCheck": true,
		"resolveJsonModule": true,
	},
	"include": [
		"./lib/**/*",
		"./src/**/*",
		"./gatsby-*.ts",
		"./plugins/**/*",
		"./*.d.ts",
		"__tests__/**/*"
	]
}`;

export default json;
