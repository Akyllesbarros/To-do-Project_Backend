const db = require('../database')

const model = new db.Schema({
    Titulo: {type: String},
    Conteudo: {type: String},
    Prioridade: {type: Number},
    Status: {type: String},
    Prazo: {type: Date},
    Data: {type: Date, default: Date.now()}
})

const Todo = db.model('Task', model)

module.exports  = Todo