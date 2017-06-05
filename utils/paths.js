const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  appDirectory: appDirectory,
  appIndexJs: resolveApp('index.js'),
  appPackageJson: resolveApp('package.json')
}
