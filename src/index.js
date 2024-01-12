const express = require('express')
const app = express()
const routerApi = require('./routes/index')

app.use(express.json())
routerApi(app)

app.listen(3000)