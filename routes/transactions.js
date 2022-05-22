import express from 'express';
import { getAll, add } from '../controllers/transactionsController.js';

const transactionsRouter = express.Router();

transactionsRouter.get('/', getAll);
transactionsRouter.post('/', add);

export { transactionsRouter }

