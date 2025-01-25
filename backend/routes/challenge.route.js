import express from 'express';
import {
    createNewChallenge,
    updateChallenge,
    getSingleChallenge,
    deleteChallenge,
    getAllChallenges,
} from '../controllers/challenge.controller.js';

const router = express.Router();

/**
 * @swagger
 * /create-challenge:
 *   post:
 *     summary: Create a new challenge
 *     tags: [Challenges]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - challengeTitle
 *               - challengeDeadline
 *               - challengeDuration
 *               - moneyPrize
 *               - contactEmail
 *               - projectDescription
 *             properties:
 *               challengeTitle:
 *                 type: string
 *                 description: Title of the challenge
 *               challengeDeadline:
 *                 type: string
 *                 description: Deadline for the challenge
 *               challengeDuration:
 *                 type: string
 *                 description: Duration of the challenge
 *               moneyPrize:
 *                 type: string
 *                 description: Prize money for the challenge
 *               contactEmail:
 *                 type: string
 *                 description: Contact email for the challenge
 *               projectDescription:
 *                 type: string
 *                 description: Description of the project
 *     responses:
 *       201:
 *         description: Challenge created successfully
 *       400:
 *         description: Bad Request
 */
router.post('/create-challenge', createNewChallenge);

/**
 * @swagger
 * /update-challenge/{id}:
 *   put:
 *     summary: Update a challenge
 *     tags: [Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the challenge to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               challengeTitle:
 *                 type: string
 *                 description: Title of the challenge
 *               challengeDeadline:
 *                 type: string
 *                 description: Deadline for the challenge
 *               challengeDuration:
 *                 type: string
 *                 description: Duration of the challenge
 *               moneyPrize:
 *                 type: string
 *                 description: Prize money for the challenge
 *               contactEmail:
 *                 type: string
 *                 description: Contact email for the challenge
 *               projectDescription:
 *                 type: string
 *                 description: Description of the project
 *     responses:
 *       200:
 *         description: Challenge updated successfully
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Challenge not found
 */
router.put('/update-challenge/:id', updateChallenge);

/**
 * @swagger
 * /challenge/{id}:
 *   get:
 *     summary: Get a single challenge
 *     tags: [Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the challenge
 *     responses:
 *       200:
 *         description: Challenge retrieved successfully
 *       404:
 *         description: Challenge not found
 */
router.get('/challenge/:id', getSingleChallenge);

/**
 * @swagger
 * /challenges:
 *   get:
 *     summary: Get all challenges
 *     tags: [Challenges]
 *     responses:
 *       200:
 *         description: List of all challenges
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: Challenge ID
 *                   challengeTitle:
 *                     type: string
 *                     description: Title of the challenge
 */
router.get('/challenges', getAllChallenges);

/**
 * @swagger
 * /delete-challenge/{id}:
 *   delete:
 *     summary: Delete a challenge
 *     tags: [Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the challenge to delete
 *     responses:
 *       200:
 *         description: Challenge deleted successfully
 *       404:
 *         description: Challenge not found
 */
router.delete('/delete-challenge/:id', deleteChallenge);

export default router;
