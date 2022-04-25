import express from 'express';
const usersRouter = express.Router();

import { getData } from '../controllers/usersController.js';

usersRouter.get('/', getData);

export { usersRouter }

