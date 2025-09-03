const Project = require('../models/Project')

async function createProject(req, res) {
    try {
        const project = await Project.create({
            ...req.body,
            user: req.user._id
        })
        return res.status(201).json(project)
    } catch (error) {
        console.error(`Error creating project: ${error}`)
        return res.status(400).json({ error: "Error creating project" })
    }
}

async function getAllProjects(req, res) {
    try {
        const projects = await Project.find({ user: req.user._id })
        return res.json(projects)
    } catch (error) {
        console.error(`Error getting all projects: ${error}`)
        return res.status(500).json({ error: "Error getting your projects" })
    }
}

module.exports = {
    createProject,
    getAllProjects,
}