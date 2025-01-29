import express from 'express'
import {
    registerForChallenge,
    getParticipantsForChallenge,
    submitWork
} from '../controllers/participants.controller.js';

const router = express.Router()

router.post('/register-for-challenge', registerForChallenge)
router.get('/participants/challenge/:id', getParticipantsForChallenge)
router.post('/submit-work', submitWork);


export default router