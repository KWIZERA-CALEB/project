import ParticipantModel from "../models/participants.model.js"
import ChallengeModel from "../models/challenge.model.js";



export const registerForChallenge = async (req, res) => {
    try {
        const { challengeId, teamLeader, otherTeamMembers } = req.body;

        const challenge = await ChallengeModel.findById(challengeId);
        if (!challenge) {
            return res.status(404).json({ message: "Challenge not found." });
        }

        const maxTeamMembers = 3;
        const minTeamMembers = 1;

        if (
            otherTeamMembers.length > maxTeamMembers ||
            otherTeamMembers.length < minTeamMembers
        ) {
            return res.status(400).json({
                message: `Team size must be between ${minTeamMembers} and ${maxTeamMembers} members.`,
            });
        }

        const participant = new ParticipantModel({
            challengeId,
            teamLeader,
            otherTeamMembers,
        });

        await participant.save();

        return res.status(201).json({
            message: "Registration successful.",
            participant,
        });
    } catch (error) {
        console.error("Error registering participant:", error);
        return res.status(500).json({
            message: "An error occurred while registering.",
        });
    }
};

export const getParticipantsForChallenge = async (req, res) => {
    try {
        const { challengeId, teamLeader, otherTeamMembers } = req.body;
        const { id } = req.params

        const challenge = await ChallengeModel.findById(id);
        if (!challenge) {
            return res.status(404).json({ message: "Challenge not found." });
        }

       const participants = await ParticipantModel.find({ challengeId: id })

        return res.status(200).json({
            participants,
        });
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while fetching participants.",
        });
    }
};

export const submitWork = async (req, res) => {
    try {
        const { teamLeaderEmail, challengeId, liveProjectLink, resourcesLink } = req.body;

        if (!teamLeaderEmail) {
            return res.status(400).json({ error: 'Team Leader email is required.' });
        }

        if (!challengeId) {
            return res.status(400).json({ error: 'Challenge ID is required.' });
        }

        if (!liveProjectLink && !resourcesLink) {
            return res.status(400).json({ error: 'At least one field (liveProjectLink or resourcesLink) is required.' });
        }

        const participant = await ParticipantModel.findOne({ 
            "teamLeader.email": teamLeaderEmail,
            challengeId
        });

        if (!participant) {
            return res.status(404).json({ error: 'Participant not found for the given team leader email and challenge ID.' });
        }

        const newWork = {
            liveProjectLink: liveProjectLink || 'Not given',
            resourcesLink: resourcesLink || 'Not given',
        };

        participant.submittedWork.push(newWork);
        await participant.save();

        return res.status(200).json({
            message: 'Work submitted successfully.',
            submittedWork: participant.submittedWork,
        });
    } catch (error) {
        console.error('Error submitting work:', error);
        return res.status(500).json({ error: 'An error occurred while submitting work.' });
    }
};

