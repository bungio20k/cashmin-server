import express from 'express';

const usersRouter = express.Router();

import { login, register, userInfo, syncData, retrieve} from '../controllers/usersController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

usersRouter.post('/login', login);
usersRouter.post('/register', register);
usersRouter.post('/retrieve', retrieve);
usersRouter.get('/user-info', authMiddleware, userInfo);
usersRouter.put('/user-info', authMiddleware, syncData);

export { usersRouter }

