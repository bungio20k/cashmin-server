import express from 'express';
import { get } from '../controllers/allDataController.js';

const allDataRouter = express.Router();

allDataRouter.get('/', get);

export { allDataRouter }

