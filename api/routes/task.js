const express = require('express')
const router = express.Router()

//GET method
router.get('/', (req, res, next) => {
    res.status(200).json({
        message:'Handling GET requests to /task'
    })
})
//POST method
router.post('/', (req, res, next) => {
    res.status(200).json({
        message:'Handling POST requests to /task'
    })
})

router.get('/:taskId', (req, res, next) => {
    const id = req.params.taskId
    
})

module.exports = router;