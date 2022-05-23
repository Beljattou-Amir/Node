const express = require ('express')
const app = express()

const taskRoutes = require('./api/routes/task')

// app.use((req, res, next) => {
//     res.status(200).json({
//         message:'it works!!!!'
//     })
// })

app.use('/task', taskRoutes)

module.exports = app;