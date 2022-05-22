import express from 'express';
import { getAll, add, del } from '../controllers/walletsController.js';

const walletsRouter = express.Router();

walletsRouter.get('/', getAll);
walletsRouter.post('/', add);
walletsRouter.delete('/', del);

export { walletsRouter }

