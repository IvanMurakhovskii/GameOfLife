module.exports = {
  testRunner: "jest",
  coverageAnalysis: "off",
  mutate: ["src/**/*.ts", "!src/**/*.test.ts", "!src/store/**"],
  timeoutMS: 60000,
  jest: { enableFindRelatedTests: false },
};