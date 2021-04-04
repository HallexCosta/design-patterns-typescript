const {
  config,
  ModuleMapper
} = require('@design-patterns-typescript/jest-config')
const tsconfig = require('./tsconfig.json')
const { name } = require('./package.json')

module.exports = {
  ...config.base,
  displayName: name,
  name,
  moduleNameMapper: ModuleMapper.pathsToModuleNameMapper(tsconfig)
}
