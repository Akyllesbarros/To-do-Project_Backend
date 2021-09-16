
const rotas = require('./routes')
const express = require('express') 
const app = express()

app.use(express.json())
app.use(rotas)

const port = process.env.PORT || 3001
app.listen(port, () => console.log('Funfou!')) 

