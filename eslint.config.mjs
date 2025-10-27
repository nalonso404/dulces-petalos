import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import globals from 'globals'
import typescriptParser from '@typescript-eslint/parser'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default [
  {
    ignores: [
      '**/.*',
      '.next/',
      'next-env.d.ts',
      'node_modules/',
      'dist/',
      'out/',
      '.yarn/',
      '**/*.json',
      'eslint.config.js'
    ]
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 7,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.node,
        ...globals.jest,
        myCustomGlobal: 'readonly'
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          modules: true
        },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      }
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'accessor-pairs': 2,
      'react/prop-types': 0,
      'react/jsx-uses-vars': [2],
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 'first',
          CallExpression: { arguments: 'first' },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1
        }
      ],
      'no-console': 0,
      'linebreak-style': [2, 'unix'],
      quotes: [2, 'single'],
      semi: [2, 'never'],
      'react/display-name': [0, { ignoreTranspilerName: true }]
    }
  }
]
