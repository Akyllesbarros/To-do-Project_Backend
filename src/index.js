
const rotas = require('./routes')
const express = require('express') 
const app = express()
var cors = require('cors')


app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})


app.use(express.json())
app.use(rotas)

const port = process.env.PORT || 3001
app.listen(port, () => console.log('Funfou!')) 

