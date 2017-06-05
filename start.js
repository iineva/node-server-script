const paths = require('./utils/paths')
const watchman = require('./utils/watchman')
const kill = require('./utils/kill')
const spawn = require('child_process').spawn

const appName = require(paths.appPackageJson).name
const BABEL_NODE_PARH = __dirname + '/node_modules/.bin/babel-node'
const presets = ['es2015', 'flow']

function runApp() {

  const app = spawn(BABEL_NODE_PARH, [
    '--presets',
    presets.map(name=>`${__dirname}/node_modules/babel-preset-${name}`).join(','),
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
