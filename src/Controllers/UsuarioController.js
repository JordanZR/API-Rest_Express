const connection = require('../db')
const usuarioCtrl = {}

var query = "SELECT * from usuario"

usuarioCtrl.getUsuarios = connection.query(query, function (err, result) {
    if (err) throw err;
    console.log(result)
})

module.exports = usuarioCtrl
