const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.set('port', 4000)

// Settings
app.set('port', process.env.PORT || app.get('port'));

// Middlewares
app.use(morgan('dev'));
app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

module.exports = app

//Routes

require('../src/Routes/UsuarioRoute')

