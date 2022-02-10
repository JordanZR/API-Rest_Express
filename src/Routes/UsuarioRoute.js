var app = require('../index')

const usuarioCtrl = require('../Controllers/UsuarioController')

app.get('/usuarios', usuarioCtrl.getUsuarios)
app.post('/usuarios', usuarioCtrl.postUsuarios)
app.put('/usuarios', usuarioCtrl.updateUsuarios)
app.delete('/usuarios', usuarioCtrl.deleteUsuarios)