const psTree = require('ps-tree')

function kill(pid, signal, callback) {
    signal   = signal || 'SIGKILL'
    callback = callback || function () {}
    psTree(pid, function (err, children) {
        [pid].concat(
            children.map(function (p) {
                return p.PID
            })
        ).forEach(function (tpid) {
            try { process.kill(tpid, signal) }
            catch (ex) { }
        })
        callback()
    })
}

module.exports = kill
