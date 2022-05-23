const express = require ('express');
const app = express();
const morgan = require ('morgan');
const mongoose = require('mongoose');


const taskRoutes = require('./api/routes/task');

mongoose.connect("mongodb+srv://Zero:" +
 process.env.MONGO_ATLAS_PW +
"@clustercrud.ysmhp.mongodb.net/?retryWrites=true&w=majority",
{
    useMongoClient: true
})

app.use(morgan('dev'))

// this is supposed to return the message below
// when the server is up and running
// app.use((req, res, next) => {
//     res.status(200).json({
//         message:'it works!!!!'
//     })
// })

app.use('/task', taskRoutes)

app.use((req, res, next) =>{
    const error = new Error('Not found');
    error.status = 404,
    next(error)
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
} )
module.exports = app;