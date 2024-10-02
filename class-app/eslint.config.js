import spConfig from '@speedingplanet/eslint-config';
import qunitConfig from 'eslint-plugin-qunit';

export default [
	...spConfig,
	{
		plugins: { qunit: qunitConfig },
		rules: {
			...qunitConfig.configs.recommended.rules,
			'qunit/no-assert-equal': 'warn',
		},
		files: ['**/test/*.js'],
	},
	{
		ignores: ['!**/test', '**/tmp/*'],
	},
];
