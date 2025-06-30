import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
      '**/test-output',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              "sourceTag": 'type:feature',
              "onlyDependOnLibsWithTags": ['type:ui'],
            },
            {
              "sourceTag": 'type:ui',
              "onlyDependOnLibsWithTags": ['type:ui'],
            },
            {
              "sourceTag": 'type:products',
              "onlyDependOnLibsWithTags": ['type:shared', 'type:products'],
            },
            {
              "sourceTag": 'type:shared',
              "onlyDependOnLibsWithTags": ['type:shared'],
            },
            {
              "sourceTag": 'type:orders',
              "onlyDependOnLibsWithTags": ['type:orders', 'type:shared', 'type:products'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
