import mongoose from 'mongoose'

const Schema = mongoose.Schema

const challengeSchema = new Schema({
    challengeTitle: {
        type: String,
        required: true,
    },
    challengeDeadline: {
        type: String,
        required: true,
    },
    challengeDuration: {
        type: String,
        required: true,
    },
    moneyPrize: {
        type: String,
        required: true,
    },
    contactEmail: {
        type: String,
        required: true,
    },
    projectDescription: {
        type: String,
        required: true,
    },
    projectBrief: {
        type: String,
        required: true,
    },
    projectDescriptionTasks: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['open', 'closed', 'ongoing'],
        required: true,
        default: 'open',
    },
    levels: {
        type: String,
        required: true,
        default: 'Senior'
    },
    skills: {
        type: String,
        required: true,
        default: 'Frontend,UI/UX'
    },
    category: {
        type: String,
        required: true,
        default: 'Web design'
    },
}, {timestamps: true})

const ChallengeModel = mongoose.model('Challenge', challengeSchema)

export default ChallengeModel