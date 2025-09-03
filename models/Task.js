const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Task title required"],
            trim: true
        },
        description: {
            type: String,
            required: [true, "Task description required"],

        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        project: {
            type: mongoose.Schema.ObjectId,
            ref: 'Project',
            required: true
        }
    }
)

const Task = mongoose.model('Task', taskSchema)

module.exports = Task