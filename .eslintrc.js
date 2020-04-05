const path = require("path");

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        "react-app",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "@typescript-eslint/tslint", "react-hooks"],
    rules: {
        "@typescript-eslint/interface-name-prefix": [
            "warn",
            {
                prefixWithI: "always",
                allowUnderscorePrefix: true,
            },
        ]
    }
};
