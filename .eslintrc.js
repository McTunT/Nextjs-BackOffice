module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browers: true
  },
  plugins: ["react", "material-ui"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ]
};
