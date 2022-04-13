module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': '@sucrase/jest-plugin'
  },
  testMatch: ['**/**/test.tsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  collectCoverage: true,
  collectCoverageFrom: ['src/components/**/*.ts(x)?', '!src/**/stories.tsx', '!src/styles/**/*.ts']
}
