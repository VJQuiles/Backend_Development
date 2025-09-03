const Project = require('../models/Project')

async function createProject(req, res) {
    try {
        const project = await Project.create({
            ...req.body,
            user: req.user._id
        })
        console.log(project)
        return res.status(201).json(project)
    } catch (error) {
        console.error(`Error creating project: ${error}`)
        return res.status(400).json({ error: "Error creating project" })
    }
}

module.exports = {
    createProject
}