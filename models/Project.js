const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Project name required."],
            unique: true
        },
        description: {
            type: String,
            required: [true, "Project Description required."]
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        }
    }
)

const Project = mongoose.model('Project', projectSchema)

module.exports = Project