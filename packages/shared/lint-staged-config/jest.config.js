const { config } = require('@design-patterns-typescript/jest-config')
const { name } = require('./package.json')

module.exports = {
  ...config.base,
  displayName: name,
  name,
  transform: {
    '.(ts)': '@sucrase/jest-plugin'
  }
}
