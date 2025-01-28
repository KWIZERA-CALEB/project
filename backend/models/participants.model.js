import mongoose from 'mongoose'

const Schema = mongoose.Schema

const participantSchema = new Schema({
    challengeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Challenge",
        required: true
    },
    teamLeader: {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        phoneNumber: { type: String, required: true },
    },
    otherTeamMembers: [
        {
            fullName: { type: String, required: true },
            email: { type: String, required: true },
            phoneNumber: { type: String, required: true },
        }
    ],
    submittedWork: [
        {
            liveProjectLink: { type: String, default: 'Not given' },
            resourcesLink: { type: String, default: 'Not given' }
        }
    ]
    
}, {timestamps: true})

const ParticipantModel = mongoose.model('Participant', participantSchema)

export default ParticipantModel