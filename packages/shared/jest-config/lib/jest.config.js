/* eslint no-useless-escape: "off" */
// prettier-ignore

module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  projects: ['<rootDir>/packages/**/jest.config.js'],
  testEnvironment: 'node',
  testRegex: ['(.*)(\w+)\/__tests__\/(.*).spec.ts'],
  transform: {
    '.(ts)': '@sucrase/jest-plugin'
  }
}
