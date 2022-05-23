const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Task = require('../models/task')

//GET method
router.get('/', (req, res, next) => {
    res.status(200).json({
        message:'Handling GET requests to /task'
    })
})
//POST method
router.post('/', (req, res, next) => {
    const task = new Task ({
        _id: new mongoose.Types.ObjectId(),
        description: req.body.description,
        faite: req.body.faite
    })
    task
    .save()
    .then(result => {
        console.log(result)
    })
    .catch(err => console.log(err))
    res.status(200).json({
        message:'Handling POST requests to /task'
    })

})
// get id of a task 
router.get('/:taskId', (req, res, next) => {
    const id = req.params.taskId
    res.status(200).json({
        message: 'Task number:',
        id: id
    })
})

router.patch('/:taskId', (req, res, next) => {
    res.status(200).json({
        message: 'task updated:'
    })
})


router.delete('/:taskId', (req, res, next) => {
    res.status(200).json({
        message: 'task deleted'
    })
})


module.exports = router;