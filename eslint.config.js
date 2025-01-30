// @ts-check
import { default as eslint } from "@eslint/js";
import angular from "angular-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from "typescript-eslint";

const eslintConfig = tseslint.config(
  {
    ignores: [
      'src/polyfills.ts',
      'src/main.ts',
    ],
  },
  {
    files: ["**/*.ts"],
    plugins: {
      prettier: eslintPluginPrettier,
      "unused-imports": unusedImports
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
      "no-extra-boolean-cast": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      'no-duplicate-imports': 'error',
      'no-unused-private-class-members': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-unneeded-ternary': 'error',
      camelcase: 'off',
      'max-depth': ['error', 5],
      'default-case': 'error',
      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-empty': 'error',
      'no-debugger': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
          message: 'Unexpected property on console object was called',
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: ['app', 'ng', 'has', 'en'],
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: ['app', 'en'],
          style: 'kebab-case',
        },
      ],
      ...eslintConfigPrettier.rules,
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
        {
          usePrettierrc: true,
        },
      ],
      "@typescript-eslint/no-empty-function":"warn",
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
  {
    files: ["**/*.html"],
    plugins: {
      prettier: eslintPluginPrettier
    },
    extends: [
      ...angular.configs.templateRecommended,
    ],
    rules: {
      "@angular-eslint/template/interactive-supports-focus": "off",
      "@angular-eslint/template/click-events-have-key-events": "off",
      "@angular-eslint/template/label-has-associated-control": "off",
      "@angular-eslint/template/no-autofocus": "off",
      "@angular-eslint/template/no-call-expression": "off",
      '@angular-eslint/template/prefer-control-flow': 'warn',
      "@angular-eslint/template/alt-text": "error",
      "@angular-eslint/template/attributes-order": "error",
      "@angular-eslint/template/banana-in-box": "error",
      "@angular-eslint/template/button-has-type": "off",
      "@angular-eslint/template/conditional-complexity": ["error",{
        maxComplexity: 10
      }],
      "@angular-eslint/template/cyclomatic-complexity": "error",
      "@angular-eslint/template/elements-content": "error",
      "@angular-eslint/template/eqeqeq": "error",
      "@angular-eslint/template/i18n": "off",
      "@angular-eslint/template/no-distracting-elements": "error",
      "@angular-eslint/template/no-duplicate-attributes": "error",
      "@angular-eslint/template/no-inline-styles": "error",
      "@angular-eslint/template/no-interpolation-in-attributes": "error",
      "@angular-eslint/template/no-negated-async": "error",
      "@angular-eslint/template/no-positive-tabindex": "error",
      "@angular-eslint/template/prefer-ngsrc": "off",
      "@angular-eslint/template/prefer-self-closing-tags": "error",
      "@angular-eslint/template/role-has-required-aria": "off",
      "@angular-eslint/template/table-scope": "error",
      "@angular-eslint/template/use-track-by-function": "off",
      "@angular-eslint/template/valid-aria": "error",
      ...eslintConfigPrettier.rules,
      "prettier/prettier": ["error", { parser: "angular" }],
    }
  }
)

export default eslintConfig;
