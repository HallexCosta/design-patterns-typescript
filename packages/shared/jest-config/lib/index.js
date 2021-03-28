const ModuleMapper = require('./ModuleMapper')
const monorepo = require('./jest.config')
const base = require('./jest-base.config')

module.exports = {
  ModuleMapper,
  config: {
    monorepo,
    base
  }
}
