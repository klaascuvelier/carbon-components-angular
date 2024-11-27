const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const angularEslintPlugin  = require('@angular-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');

module.exports = [
	// eslint recommended?
	//typescriptEslintPlugin.configs.recommended,
//	angularEslintPlugin.configs.recommended,

	{
    files: ["src/**/*.ts"],
    languageOptions: {
        parser: typescriptParser,
        ecmaVersion: 2020,
        sourceType: "module",
    },
    plugins: {
        "@typescript-eslint": typescriptEslintPlugin,
        "@angular-eslint": angularEslintPlugin
    },
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "class",
        format: ["PascalCase"]
      }
    ],
    "spaced-comment": ["error", "always"],
    "curly": "error",
    "eol-last": "error",
    "guard-for-in": "error",
    "indent": ["error", "tab"],
    "max-len": ["error", { code: 140 }],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "public-constructor",
          "protected-constructor",
          "private-constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }
    ],
    "no-caller": "error",
    "no-bitwise": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-new-wrappers": "error",
    "no-debugger": "error",
    "no-duplicate-case": "error",
    "no-empty": "off",
    "no-eval": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "no-shadow": "off",
    "no-case-declarations": "error",
    "no-trailing-spaces": "error",
    "no-unused-expressions": "error",
    "no-var": "error",
    "sort-keys": "off",
    "brace-style": ["error", "1tbs"],
    "quotes": ["error", "double"],
    "radix": "error",
    "semi": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "eqeqeq": ["error", "always", { null: "ignore" }],
    "space-before-function-paren": ["error", "never"],
    "keyword-spacing": "error",
    "@angular-eslint/directive-selector": [
      "error",
      {
        type: "attribute",
        prefix: ["ibm", "cds", "app", "test"],
        style: "camelCase"
      }
    ],
    "@angular-eslint/component-selector": [
      "error",
      {
        type: "element",
        prefix: ["ibm", "cds", "app", "test"],
        style: "kebab-case"
      }
    ],
    "@angular-eslint/no-inputs-metadata-property": "error",
    "@angular-eslint/no-outputs-metadata-property": "error",
    "@angular-eslint/no-host-metadata-property": "error",
    "@angular-eslint/no-input-rename": "error",
    "@angular-eslint/no-output-rename": "error",
    "@angular-eslint/use-lifecycle-interface": "error",
    "@angular-eslint/use-pipe-transform-interface": "error"
  }
}];
