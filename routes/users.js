import express from 'express';

const usersRouter = express.Router();

import { login, register, userInfo } from '../controllers/usersController.js';

usersRouter.post('/login', login);
usersRouter.post('/register', register);

export { usersRouter }

