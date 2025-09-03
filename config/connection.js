const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log(`Connection to ${mongoose.connection.name} successful.`))
        .catch((error) => {
            console.error(`DB Connection Error: ${error}`)
            process.exit(1)
        })

    mongoose.connection.on('error', error => {
        console.error(`Error occured during connection ${error.message}`)
    })
}

module.exports = connect