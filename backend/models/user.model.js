import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    userRole: {
        required: true,
        type: String,
        enum: ['talent', 'admin'],
        default: 'talent'
    },
    password: {
        required: true,
        type: String
    },
}, {timestamps: true})

const UserModel = mongoose.model('User', userSchema)

export default UserModel