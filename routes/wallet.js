import express from 'express';
import { all } from '../controllers/walletsController.js';

const walletsRouter = express.Router();

walletsRouter.get('/', all);

export { walletsRouter }

