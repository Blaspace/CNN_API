const PORT = 8000
const express = require('express')
const router = require('./routes/AllRoutes')

const app = express()

app.use(router)

app.listen(PORT, ()=> console.log(`app running on ${PORT}`))