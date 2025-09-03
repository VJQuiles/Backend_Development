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

async function getOneProject(req, res) {
    try {
        const project = await Project.findById(req.params.id)
        return res.json(project)
    } catch (error) {
        console.error(`Error getting project with ID: ${req.params.id} => ${error}`)
        return res.status(500).json({ error: "Error retrieving project" })
    }
}

async function updateProject(req, res) {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!project) return res.status(404).json({ message: `Project with id ${req.params.id} does not exist.` })
        return res.json(project)
    } catch (error) {
        console.error(`Error updating project with ID: ${req.params.id} => ${error}`)
        return res.status(500).json({ error: "Error updating project" })
    }
}

module.exports = {
    createProject,
    getAllProjects,
    getOneProject,
    updateProject
}