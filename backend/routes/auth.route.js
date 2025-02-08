import express from 'express'
import {
    registerUser,
    loginUser,
    getLoggedInUser,
    logoutUser
} from '../controllers/auth.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js'

const router = express.Router()

/**
 * @swagger
 * /register-user:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     description: Register a user by providing full name, email, password, and user role.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - email
 *               - password
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: The full name of the user.
 *                 example: 'Jane Doe'
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *                 example: 'jane.doe@example.com'
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: 'Password123'
 *               userRole:
 *                 type: string
 *                 enum:
 *                   - talent
 *                   - admin
 *                 description: The user's role in the system.
 *                 example: 'talent'
 *     responses:
 *       201:
 *         description: User successfully registered.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'You are registered'
 *       400:
 *         description: Missing required fields or invalid data.
 *       500:
 *         description: Internal server error.
 */
router.post('/register-user', registerUser)

/**
 * @swagger
 * /login-user:
 *   post:
 *     summary: Login a user
 *     tags: [User]
 *     description: Login a user by providing email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address.
 *                 example: 'jane.doe@example.com'
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: 'Password123'
 *     responses:
 *       200:
 *         description: User successfully logged in.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for user authentication.
 *                   example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The unique identifier for the user.
 *                       example: '60c72b2f9b1d8f001f9b1a59'
 *                     fullName:
 *                       type: string
 *                       description: The full name of the user.
 *                       example: 'Jane Doe'
 *                     email:
 *                       type: string
 *                       description: The user's email address.
 *                       example: 'jane.doe@example.com'
 *                     role:
 *                       type: string
 *                       description: The role of the user (either 'talent' or 'admin').
 *                       example: 'talent'
 *       400:
 *         description: Invalid credentials or missing fields.
 *       500:
 *         description: Internal server error.
 */
router.post('/login-user', loginUser)

/**
 * @swagger
 * /logout-user:
 *   post:
 *     summary: Logout the user
 *     tags: [User]
 *     description: Log out the user from the application.
 *     responses:
 *       200:
 *         description: Successfully logged out.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Logged out successfully'
 *       500:
 *         description: Internal server error.
 */
router.post('/logout-user', logoutUser)

/**
 * @swagger
 * /loggedin-user:
 *   get:
 *     summary: Get details of the logged-in user
 *     tags: [User]
 *     description: Get the details of the currently logged-in user. This route requires the user to be authenticated.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Details of the logged-in user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier for the user.
 *                   example: '60c72b2f9b1d8f001f9b1a59'
 *                 fullName:
 *                   type: string
 *                   description: The full name of the user.
 *                   example: 'Jane Doe'
 *                 email:
 *                   type: string
 *                   description: The email address of the user.
 *                   example: 'jane.doe@example.com'
 *                 role:
 *                   type: string
 *                   description: The role of the user (either 'talent' or 'admin').
 *                   example: 'talent'
 *       401:
 *         description: Unauthorized. Token is missing or invalid.
 *       500:
 *         description: Internal server error.
 */
router.get('/loggedin-user', protectRoute, getLoggedInUser)

export default router