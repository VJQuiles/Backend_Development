const router = require('express').Router()
const taskController = require('../../controllers/taskController')

router.use(verifyUser)

router.put('/:taskId', taskController.updateTask)
router.delete('/:taskId', taskController.deleteTask)

module.exports = router