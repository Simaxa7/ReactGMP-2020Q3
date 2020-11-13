module.exports = {
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "babel-jest",
  },
  collectCoverage: true,
  coverageReporters: ["lcov"],
  coverageDirectory: "test-coverage",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    }
  },
  setupFilesAfterEnv: [
    "./jest.setup.js"
  ]
};