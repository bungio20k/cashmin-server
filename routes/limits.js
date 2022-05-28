import express from 'express';
import { update } from '../controllers/limitsController.js';

const limitsRouter = express.Router();

limitsRouter.put('/', update);

export { limitsRouter }

