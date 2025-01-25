import express from 'express'
import { createNewChallenge, updateChallenge, getSingleChallenge, deleteChallenge, getAllChallenges } from '../controllers/challenge.controller.js'

const router = express.Router()

router.post('/create-challenge', createNewChallenge)
router.put('/update-challenge/:id', updateChallenge)
router.get('/challenge/:id', getSingleChallenge)
router.get('/challenges', getAllChallenges)
router.delete('/delete-challenge/:id', deleteChallenge)

export default router