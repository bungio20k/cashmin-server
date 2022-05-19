import express from 'express';
import { auth } from '../controllers/auth.js';

const usersRouter = express.Router();

import { login, test } from '../controllers/usersController.js';

usersRouter.post('/login', login);
usersRouter.get('/test', auth, test);

export { usersRouter }

