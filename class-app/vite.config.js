import { defineConfig } from 'vite';
import { directoryPlugin } from 'vite-plugin-list-directory-contents';

let defaultFilters = [
	'.DS_Store',
	'package.json',
	'package-lock.json',
	'node_modules',
	'.parcelrc',
	'.parcel-cache',
	'dist',
	'packages',
	'.git',
	'.eslintrc',
	'.gitignore',
	'.npmrc',
	'tsconfig.json',
	'vite.config.ts',
	'vite.config.js',
	'.env',
	'development.env',
	'production.env',
	'.vite',
];

let filterList = ['.eslintrc.json', '.prettierrc.json', 'babel.config.json', '.vscode', ...defaultFilters];

export default defineConfig({
	plugins: [directoryPlugin({
		baseDir: __dirname,
		filterList,
	})],
});
