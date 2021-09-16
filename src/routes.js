const rotas = require('express').Router()
const api = require('./controller/TodoController')


rotas.get('/', (req, res) => {
    return res.send('Puxou!')
})

rotas.get('/get-all', api.all)
rotas.post('/create-task', api.create)
rotas.put('/update/:id', api.update)
rotas.delete('/delete/:id', api.delete)
rotas.get('/get-one/:id', api.one)















module.exports = rotas
