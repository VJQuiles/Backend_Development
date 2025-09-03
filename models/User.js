const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Username required"],
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: [true, "Email required"],
            unique: true,
            match: [/.+@.+\..+/, "You must enter a valid email format(user@example.com)"]
        },
        password: {
            type: String,
            required: [true, "Password required"],
            unique: true
        }
    },
    {
        // Omission of the password when sending back user information.
        toJSON: {
            transform: (doc, ret) => {
                delete ret.password
                delete ret.__v
                return ret
            },
        },
    }
)

// Hashing of password with bcrypt for security.
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next()
})

// Password comparison for authentication in login.
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
}

// Put requests are top of mind here. Should a user update information, this is a safety check in case the validators in the schema don't run
mongoose.set('runValidators', true)

const User = mongoose.model("User", userSchema)

module.exports = User