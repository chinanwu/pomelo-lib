module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest"
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/"]
};
