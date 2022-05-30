import express from 'express';
import { getAll, add, del, sync } from '../controllers/walletsController.js';

const walletsRouter = express.Router();

walletsRouter.get('/', getAll);
walletsRouter.post('/', add);
walletsRouter.delete('/', del);
walletsRouter.put('/', sync);

export { walletsRouter }

