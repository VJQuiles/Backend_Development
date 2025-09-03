const router = require('express').Router()
const projectController = require('../../controllers/productController')
// const taskController = require('../../controllers/taskController')
const verifyUser = require('../../middleware/auth')

router.use(verifyUser)

router.post('/create-project', projectController.createProject)
router.get('/user-projects', projectController.getAllProjects)
router.get('/user-projects/:id', projectController.getOneProject)
router.put('/update-project/:id', projectController.updateProject)
router.delete('/delete-project/:id', projectController.deleteProject)

module.exports = router