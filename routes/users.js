import express from 'express';

const usersRouter = express.Router();

import { login, register } from '../controllers/usersController.js';

usersRouter.post('/login', login);
usersRouter.post('/register', register);

export { usersRouter }

