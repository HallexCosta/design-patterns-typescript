module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  projects: ['<rootDir>/packages/**/jest.config.js'],
  testEnvironment: 'node',
  transform: {
    '.(ts)': '@sucrase/jest-plugin'
  }
}
