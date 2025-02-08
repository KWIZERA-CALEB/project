import express from 'express'
import {
    registerForChallenge,
    getParticipantsForChallenge,
    submitWork
} from '../controllers/participants.controller.js';

const router = express.Router()

/**
 * @swagger
 * /register-for-challenge:
 *   post:
 *     summary: Register a team for a challenge
 *     tags: [Participants]
 *     description: Register a new team for a specific challenge by providing challenge ID, team leader details, and other team members.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - challengeId
 *               - teamLeader
 *               - otherTeamMembers
 *             properties:
 *               challengeId:
 *                 type: string
 *                 description: The ID of the challenge being registered for.
 *                 example: '60c72b2f9b1d8f001f9b1a59'
 *               teamLeader:
 *                 type: object
 *                 properties:
 *                   fullName:
 *                     type: string
 *                     description: Full name of the team leader.
 *                     example: 'John Doe'
 *                   email:
 *                     type: string
 *                     description: Email of the team leader.
 *                     example: 'john.doe@example.com'
 *                   phoneNumber:
 *                     type: string
 *                     description: Phone number of the team leader.
 *                     example: '+1234567890'
 *               otherTeamMembers:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     fullName:
 *                       type: string
 *                       description: Full name of a team member.
 *                       example: 'Jane Smith'
 *                     email:
 *                       type: string
 *                       description: Email of the team member.
 *                       example: 'jane.smith@example.com'
 *                     phoneNumber:
 *                       type: string
 *                       description: Phone number of the team member.
 *                       example: '+9876543210'
 *     responses:
 *       201:
 *         description: Registration successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Registration successful.'
 *                 participant:
 *                   $ref: '#/components/schemas/Participant'
 *       400:
 *         description: Invalid team size or input data.
 *       404:
 *         description: Challenge not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/register-for-challenge', registerForChallenge)

/**
 * @swagger
 * /participants/challenge/{id}:
 *   get:
 *     summary: Get all participants for a specific challenge
 *     tags: [Participants]
 *     description: Retrieve a list of all participants registered for a specific challenge using its challenge ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the challenge.
 *         schema:
 *           type: string
 *           example: '60c72b2f9b1d8f001f9b1a59'
 *     responses:
 *       200:
 *         description: A list of participants for the challenge.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 participants:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Participant'
 *       404:
 *         description: Challenge not found.
 *       500:
 *         description: Internal server error.
 */
router.get('/participants/challenge/:id', getParticipantsForChallenge)

/**
 * @swagger
 * /submit-work:
 *   post:
 *     summary: Submit work for a challenge
 *     tags: [Participants]
 *     description: Submit the work (e.g., live project link, resources link) for a specific challenge by providing team leader email and challenge ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - teamLeaderEmail
 *               - challengeId
 *             properties:
 *               teamLeaderEmail:
 *                 type: string
 *                 format: email
 *                 description: Email of the team leader submitting work.
 *                 example: 'john.doe@example.com'
 *               challengeId:
 *                 type: string
 *                 description: The ID of the challenge for which work is being submitted.
 *                 example: '60c72b2f9b1d8f001f9b1a59'
 *               liveProjectLink:
 *                 type: string
 *                 description: URL to the live project.
 *                 example: 'https://example.com/live-project'
 *               resourcesLink:
 *                 type: string
 *                 description: URL to the resources used in the project.
 *                 example: 'https://example.com/resources'
 *     responses:
 *       200:
 *         description: Work submitted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Work submitted successfully.'
 *                 submittedWork:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       liveProjectLink:
 *                         type: string
 *                         description: Link to the live project.
 *                       resourcesLink:
 *                         type: string
 *                         description: Link to the project resources.
 *       400:
 *         description: Missing required fields (email, challenge ID, or both links).
 *       404:
 *         description: Participant not found for the given email and challenge ID.
 *       500:
 *         description: Internal server error.
 */
router.post('/submit-work', submitWork);


export default router