import express from 'express';
import { update } from '../controllers/settingsController.js';

const settingsRouter = express.Router();

settingsRouter.put('/', update);

export { settingsRouter }

