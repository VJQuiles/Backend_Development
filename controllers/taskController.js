const Task = require('../models/Task')
const Project = require('../models/Project')

async function createTask(req, res) {
    try {
        const project = await Project.findById(req.params.projectId)

        if (project === null) return res.status(404).json({ error: "This is not the project your looking for - Obi Wan voice" })

        if (!project.user.equals(req.user._id)) return res.status(403).json({ message: "Kick rocks buddy" })

        const task = await Task.create({
            ...req.body,
            project: req.params.projectId
        })

        console.log(task)
        return res.send("this went through")
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Error creating task" })
    }
}

async function getTasks(req, res) {
    try {
        const project = await Project.findById(req.params.projectId)

        if (project === null) return res.status(404).json({ error: "This is not the project your looking for - Obi Wan voice" })

        if (!project.user.equals(req.user._id)) return res.status(403).json({ message: "Kick rocks buddy" })

        const tasks = await Task.find({ project: req.params.projectId })
        return res.json(tasks)
    } catch (error) {
        console.error(`Error getting tasks: ${error}`)
        return res.status(500).json({ error: "Error getting tasks" })
    }
}

async function updateTask(req, res) {
    try {
        const project = await Project.findById(req.params.projectId)

        if (project === null) return res.status(404).json({ error: "Project does not exist" })

        if (!project.user.equals(req.user._id)) return res.status(403).json({ message: "This is not your project" })

        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!task) return res.status(404).json({ message: `No task with ID: ${req.params.id}` })
        return res.json(task)
    } catch (error) {
        return res.status(500).json({ error: `Error updating task: ${error.message}` })
    }
}

async function deleteTask(req, res) {
    try {
        const project = await Project.findById(req.params.projectId)

        if (project === null) return res.status(404).json({ error: "Project does not exist" })

        if (!project.user.equals(req.user._id)) return res.status(403).json({ message: "This is not your project" })

        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) return res.status(404).json({ message: `No task with ID: ${req.params.id}` })
        return res.json({ message: `${task.title} successfully deleted` })
    } catch (error) {
        return res.status(500).json({ error: `Error deleting task: ${error.message}` })
    }
}

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
}