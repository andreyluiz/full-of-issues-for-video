/** @type {import('jest').Config} */
const config = {
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/coverage/",
    "babel.config.js",
    "jest.config.js",
    "/*.json/",
  ],
  transformIgnorePatterns: ["node_modules"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
};

module.exports = config;
