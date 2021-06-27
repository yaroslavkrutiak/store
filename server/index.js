const express = require('express')
const app = express()
const pg = require('postgres')

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log(`App is listening on http://localhost:${PORT}`))