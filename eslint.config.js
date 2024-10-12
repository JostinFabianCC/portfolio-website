import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginImport from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";
import pluginUnusedImports from "eslint-plugin-unused-imports";

export default [
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            globals: globals.browser,
        },
        plugins: {
            react: pluginReact,
            reactHooks: pluginReactHooks,
            jsxA11y: pluginJsxA11y,
            import: pluginImport,
            unusedImports: pluginUnusedImports,
        },
        rules: {
            ...pluginJs.configs.recommended.rules,

            ...pluginReact.configs.flat.recommended.rules,
            'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
            'react/react-in-jsx-scope': 'off',

            // Reglas de Hooks
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // Reglas de accesibilidad en JSX
            ...pluginJsxA11y.configs.recommended.rules,

            // Reglas de importación
            'import/order': [
                'error',
                {
                    groups: [['builtin', 'external', 'internal']],
                    'newlines-between': 'always',
                },
            ],
            'import/no-unused-modules': [1, {unusedExports: true}],

            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            ...prettierConfig.rules,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
