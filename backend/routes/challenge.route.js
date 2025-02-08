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
 *               - projectBrief
 *               - projectDescriptionTasks
 *               - status
 *               - levels
 *               - skills
 *               - category
 *             properties:
 *               challengeTitle:
 *                 type: string
 *                 description: Title of the challenge
 *               challengeDeadline:
 *                 type: string
 *                 description: Deadline for the challenge (e.g., "2025-05-01")
 *               challengeDuration:
 *                 type: string
 *                 description: Duration of the challenge (e.g., "2 weeks")
 *               moneyPrize:
 *                 type: string
 *                 description: Prize money for the challenge (e.g., "$1000")
 *               contactEmail:
 *                 type: string
 *                 description: Contact email for the challenge (e.g., "example@domain.com")
 *               projectDescription:
 *                 type: string
 *                 description: Description of the project (e.g., "A web development challenge to build a UI")
 *               projectBrief:
 *                 type: string
 *                 description: Brief overview of the project (e.g., "Create a responsive website")
 *               projectDescriptionTasks:
 *                 type: string
 *                 description: Breakdown of tasks for the project (e.g., "Design UI, Implement features")
 *               status:
 *                 type: string
 *                 enum:
 *                   - open
 *                   - closed
 *                   - ongoing
 *                 description: Current status of the challenge (default is "open")
 *               levels:
 *                 type: string
 *                 description: Skill level required for the challenge (e.g., "Senior")
 *               skills:
 *                 type: string
 *                 description: Skills required for the challenge (e.g., "Frontend, UI/UX")
 *               category:
 *                 type: string
 *                 description: Category of the challenge (e.g., "Web design")
 *     responses:
 *       201:
 *         description: Challenge created successfully
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.post('/create-challenge', createNewChallenge);

/**
 * @swagger
 * /update-challenge/{id}:
 *   put:
 *     summary: Update an existing challenge
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
 *                 description: Deadline for the challenge (e.g., "2025-05-01")
 *               challengeDuration:
 *                 type: string
 *                 description: Duration of the challenge (e.g., "2 weeks")
 *               moneyPrize:
 *                 type: string
 *                 description: Prize money for the challenge (e.g., "$1000")
 *               contactEmail:
 *                 type: string
 *                 description: Contact email for the challenge (e.g., "example@domain.com")
 *               projectDescription:
 *                 type: string
 *                 description: Description of the project (e.g., "A web development challenge to build a UI")
 *               projectBrief:
 *                 type: string
 *                 description: Brief overview of the project (e.g., "Create a responsive website")
 *               projectDescriptionTasks:
 *                 type: string
 *                 description: Breakdown of tasks for the project (e.g., "Design UI, Implement features")
 *               status:
 *                 type: string
 *                 enum:
 *                   - open
 *                   - closed
 *                   - ongoing
 *                 description: Current status of the challenge (e.g., "open", "closed", "ongoing")
 *               levels:
 *                 type: string
 *                 description: Skill level required for the challenge (e.g., "Senior")
 *               skills:
 *                 type: string
 *                 description: Skills required for the challenge (e.g., "Frontend, UI/UX")
 *               category:
 *                 type: string
 *                 description: Category of the challenge (e.g., "Web design")
 *     responses:
 *       200:
 *         description: Challenge updated successfully
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Challenge not found
 *       500:
 *         description: Internal Server Error
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
 *     summary: Get all challenges or filter by status
 *     tags: [Challenges]
 *     description: Retrieve all challenges or filter challenges by their status (open, closed, or ongoing).
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [open, closed, ongoing]
 *           nullable: true
 *         required: false
 *         description: Filter challenges by their status. If not provided, all challenges will be retrieved.
 *     responses:
 *       200:
 *         description: Challenges retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Challenges retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: 63fc123456789abc
 *                       challengeTitle:
 *                         type: string
 *                         example: Build a Dashboard
 *                       challengeDeadline:
 *                         type: string
 *                         example: 2025-01-31
 *                       challengeDuration:
 *                         type: string
 *                         example: 2 weeks
 *                       moneyPrize:
 *                         type: string
 *                         example: 5000
 *                       contactEmail:
 *                         type: string
 *                         example: example@domain.com
 *                       projectDescription:
 *                         type: string
 *                         example: Build an admin dashboard.
 *                       projectBrief:
 *                         type: string
 *                         example: Dashboard features include charts and user management.
 *                       projectDescriptionTasks:
 *                         type: string
 *                         example: Complete wireframes, develop frontend and backend.
 *                       status:
 *                         type: string
 *                         example: open
 *                       createdAt:
 *                         type: string
 *                         example: 2025-01-20T10:30:00.000Z
 *                       updatedAt:
 *                         type: string
 *                         example: 2025-01-20T10:30:00.000Z
 *       400:
 *         description: Invalid status value.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid status value. Allowed values are 'open', 'closed', or 'ongoing'.
 *       500:
 *         description: Error retrieving challenges.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error retrieving challenges
 *                 error:
 *                   type: string
 *                   example: Database connection error
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
