const Task = require('../models/Task')

async function createTask(req, res) {
    try {
        const task = await Task.create({
            ...req.body,
            project: req.params.projectId
        })

        console.log(task)
        return res.status(201).json(task)
    } catch (error) {
        console.error(`Error creating task: ${error}`)
        return res.status(400).json({ error: "Error creating task" })
    }
}

async function getTasks(req, res) {
    try {
        const tasks = await Task.find({ project: req.params.projectId })
        return res.json(tasks)
    } catch (error) {
        console.error(`Error getting tasks: ${error}`)
        return res.status(500).json({ error: "Error getting tasks" })
    }
}

module.exports = {
    createTask,
    getTasks
}