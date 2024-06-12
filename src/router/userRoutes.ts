import express from 'express';
import { register, login, getUserDetails } from '../controller/userController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/me', authMiddleware, getUserDetails);

export default router;