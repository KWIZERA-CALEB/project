import express from 'express'
import {
    registerForChallenge,
    getParticipantsForChallenge
} from '../controllers/participants.controller.js';

const router = express.Router()

router.post('/register-for-challenge', registerForChallenge)
router.get('/participants/challenge/:id', getParticipantsForChallenge)


export default router