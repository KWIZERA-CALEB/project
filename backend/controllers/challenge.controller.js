import ChallengeModel from "../models/challenge.model.js";
import ParticipantModel from "../models/participants.model.js";


// Create a new challenge
export const createNewChallenge = async (req, res) => {
    try {
        const newChallenge = new ChallengeModel(req.body);
        const savedChallenge = await newChallenge.save();
        return res.status(201).json({
            message: "Challenge created successfully!",
            data: savedChallenge,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error creating challenge",
            error: error.message,
        });
    }
};

// Update an existing challenge
export const updateChallenge = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedChallenge = await ChallengeModel.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatedChallenge) {
            return res.status(404).json({
                message: "Challenge not found",
            });
        }

        return res.status(200).json({
            message: "Challenge updated successfully",
            data: updatedChallenge,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error updating challenge",
            error: error.message,
        });
    }
};

// Get a single challenge by ID
export const getSingleChallenge = async (req, res) => {
    const { id } = req.params;

    try {
        const challenge = await ChallengeModel.findById(id);

        if (!challenge) {
            return res.status(404).json({
                message: "Challenge not found",
            });
        }

        return res.status(200).json({
            message: "Challenge retrieved successfully",
            data: challenge,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error retrieving challenge",
            error: error.message,
        });
    }
};


// Get all challenges or filter by status
export const getAllChallenges = async (req, res) => {
    try {
        const { status } = req.query; // Extract the `status` query parameter
        
        let filter = {};
        if (status) {
            if (['open', 'closed', 'ongoing'].includes(status)) {
                filter.status = status; // Add the status filter if valid
            } else {
                return res.status(400).json({
                    message: "Invalid status value. Allowed values are 'open', 'closed', or 'ongoing'.",
                });
            }
        }

        const challenges = await ChallengeModel.find(filter).sort({ createdAt: -1 });

        return res.status(200).json({
            message: "Challenges retrieved successfully",
            data: challenges,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error retrieving challenges",
            error: error.message,
        });
    }
};


// Delete a challenge by ID
export const deleteChallenge = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedChallenge = await ChallengeModel.findByIdAndDelete(id);

        if (!deletedChallenge) {
            return res.status(404).json({
                message: "Challenge not found",
            });
        }

        await ParticipantModel.deleteMany({ challengeId: id });

        return res.status(200).json({
            message: "Challenge and its participants deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error deleting challenge and participants",
            error: error.message,
        });
    }
};
