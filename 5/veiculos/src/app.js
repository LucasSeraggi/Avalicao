const express = require('express')
const veiculoRoutes = require('./routes/veiculoRoutes')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/veiculo', veiculoRoutes)

module.exports = app
