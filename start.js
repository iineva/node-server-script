const paths = require('./utils/paths')
const watchman = require('./utils/watchman')
const kill = require('./utils/kill')
const spawn = require('child_process').spawn

const appName = require(paths.appPackageJson).name
const presets = ['es2015', 'flow']

function runApp() {

  const app = spawn('babel-node', [
    '--presets',
    presets.join(','),
    paths.appIndexJs
  ], {stdio: 'inherit'})

  app.on('close', (code, signal) => {
    console.log(`child process terminated due to receipt of signal ${signal}`)
  })

  app.on('close', (code) => {
    // do nothing.
  })

  return app
}


let APP = null
function startApp() {
  if (APP) { kill(APP.pid) }
  APP = runApp()
}

function start() {
  startApp()
  watchman(paths.appDirectory, (path)=>{
    console.log(`File changed: ${path}`)
    startApp()
  })
}

module.exports = start
