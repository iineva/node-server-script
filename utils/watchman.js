const chokidar = require('chokidar')

function watch(root, cb) {

  const watcher = chokidar.watch(root, {
    ignored: /(node_modules)|((\.DS_Store)$)/,
    persistent: true
  })

  watcher
    .on('change', cb)
    .on('unlink', cb)

  return watcher
}

module.exports = watch
