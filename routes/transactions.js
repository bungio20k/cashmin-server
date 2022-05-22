import express from 'express';
import { add } from '../controllers/transactionsController.js';

const transactionsRouter = express.Router();

transactionsRouter.post('/', add);

export { transactionsRouter }

