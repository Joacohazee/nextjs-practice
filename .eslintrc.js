module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: ["./tsconfig.json"],
      tsconfigRootDir: __dirname,
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    extends: [
      "airbnb-typescript/base",
      "next/core-web-vitals",
      "plugin:prettier/recommended",
    ],
    rules: {
      quotes: ["error", "double"],
    },
    ignorePatterns: ["node_modules/", "dist/", ".next/"],
    settings: {
      react: {
        version: "detect",
      },
    },
  };
  