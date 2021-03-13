const { name } = require('./package.json')

module.exports = {
  displayName: name,
  name,
  transform: {
    '.(ts)': '@sucrase/jest-plugin'
  }
}
