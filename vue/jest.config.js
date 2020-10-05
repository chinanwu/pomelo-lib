module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest"
  },
  collectCoverage: true,
  moduleFileExtensions: ["js", "json", "vue"],
  globals: {
    "vue-jest": {
      babelConfig: false
    }
  }
};
