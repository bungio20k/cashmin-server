import express from 'express';

const usersRouter = express.Router();

import { login, register, userInfo } from '../controllers/usersController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

usersRouter.post('/login', login);
usersRouter.post('/register', register);
usersRouter.get('/user-info', authMiddleware, userInfo);

export { usersRouter }

