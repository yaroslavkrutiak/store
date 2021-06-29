require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')

const app = express()


const PORT = process.env.PORT || 3000


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()