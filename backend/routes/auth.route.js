import express from 'express'
import {
    registerUser,
    loginUser,
    getLoggedInUser,
    logoutUser
} from '../controllers/auth.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js'

const router = express.Router()


router.post('/register-user', registerUser)
router.post('/login-user', loginUser)
router.post('/logout-user', logoutUser)
router.get('/loggedin-user', protectRoute, getLoggedInUser)

export default router