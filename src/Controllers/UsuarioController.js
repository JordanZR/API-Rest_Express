const connection = require('../db')
const usuarioCtrl = {}

var query

usuarioCtrl.getUsuarios = (req, res)=>{
    query = "SELECT * from usuario"
    connection.query(query, function (err, result) {
        if (err) throw err;
        res.json(result)
    })
}

usuarioCtrl.postUsuarios = (req, res)=>{
    query = "INSERT INTO usuario(name, surname) VALUES('" + req.body.name +  "','" + req.body.surname + "')"
    connection.query(query, function (err, result) {
        if (err) throw err;
        query = "SELECT * from usuario"
        connection.query(query, function (err, result) {
            if (err) throw err;
            res.json(result)
        })
    })
}

module.exports = usuarioCtrl
