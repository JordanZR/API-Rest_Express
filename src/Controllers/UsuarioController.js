const connection = require('../db')
const usuarioCtrl = {}

var query

usuarioCtrl.getUsuarios = (req, res)=>{
    query = "SELECT * from usuario"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        res.json(result)
    })
}

usuarioCtrl.postUsuarios = (req, res)=>{
    query = "INSERT INTO usuario(name, surname) VALUES('" + req.body.name +  "','" + req.body.surname + "')"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        query = "SELECT * from usuario"
        connection.query(query, function (err, result) {
            if (err) throw err;
            res.json(result)
        })
    })
}

usuarioCtrl.updateUsuarios = (req,res)=>{
    query = "UPDATE usuario SET name = '" + req.body.name + "',surname = '" + req.body.surname + "' WHERE id = " + req.body.id
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        query = "SELECT * from usuario"
        connection.query(query, function (err, result) {
            if (err) throw err;
            res.json(result)
        })
    })
}

usuarioCtrl.deleteUsuarios = (req,res)=>{
    query = "DELETE FROM usuario WHERE id = " + req.body.id
    connection.query(query, function (err, result) {
        if (err) console.log(err);
        query = "SELECT * from usuario"
        connection.query(query, function (err, result) {
            if (err) throw err;
            res.json(result)
        })
    })
}
module.exports = usuarioCtrl
