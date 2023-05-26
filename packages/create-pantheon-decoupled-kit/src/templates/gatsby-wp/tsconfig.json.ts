const json = () => /* JSON */ `{
	"compilerOptions": {
		"target": "esnext",
		"lib": ["dom", "esnext"],
		"jsx": "react-jsx",
		"module": "esnext",
		"moduleResolution": "node",
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"strict": true,
		"skipLibCheck": true
	},
	"include": [
		"./lib/**/*",
		"./src/**/*",
		"./gatsby-*.ts",
		"./plugins/**/*",
		"./*.d.ts"
	]
}`;

export default json;
