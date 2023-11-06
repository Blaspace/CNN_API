const PORT = 8000
const cors = require('cors')
const express = require('express')
const router = require('./routes/AllRoutes')

const app = express()
app.use(cors())
app.use(router)

app.listen(PORT, ()=> console.log(`app running on ${PORT}`))
