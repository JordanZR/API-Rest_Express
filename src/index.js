const express = require('express')
const app = express()
const morgan = require('morgan')

app.set('port', 4000)

// Settings
app.set('port', process.env.PORT || app.get('port'));

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

//Controllers

const usuarioCtrl = require('../src/Controllers/UsuarioController')

module.exports = app