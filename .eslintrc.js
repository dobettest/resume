module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "comma-dangle": ["error", "never"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }]
  }
};
