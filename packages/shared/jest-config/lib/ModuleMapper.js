const { exec } = require('child_process')
const util = require('util')

const ModuleMapper = {
  async pathsToModuleNameMapperStaged() {
    const execPromise = util.promisify(exec)

    function callback(error, stdout, stderr) {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }
      const directories = stdout.split('\n')
      const regex = /(?:[a-z]+\/)(shared)?(.+?)\/(__tests__\/)\w+.spec.ts$/

      const packages = new Set()

      for (const directory of directories) {
        if (regex.test(directory)) {
          console.log(directory)
          const directorySplited = directory.split('/')
          const name =
            directorySplited[1] === 'shared'
              ? directorySplited[2]
              : directorySplited[1]

          console.log('PACKAGE NAME', name)

          packages.add({
            name,
            directory: `<rooDir>/./${directory}`
          })
        }
      }
      console.log(packages)
    }
    await execPromise('git diff --name-only --cached', callback)
  },
  pathsToModuleNameMapper({ compilerOptions: { paths } }) {
    const moduleNameMapper = {}

    for (const [modulePath, absolutePath] of Object.entries(paths)) {
      const regex = /\/*$/
      if (regex.test(modulePath)) {
        const modulePathSplited = modulePath.split('/')
        modulePathSplited[1] = `(.${modulePathSplited[1]})`

        const newModulePath = modulePathSplited.join('/')
        const newAbsolutePath = `<rootDir>/${absolutePath}`

        moduleNameMapper[newModulePath] = newAbsolutePath
      }
    }
    return moduleNameMapper
  }
}

module.exports = ModuleMapper
