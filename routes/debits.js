import express from 'express';
import { getAll, add, del } from '../controllers/debitsController.js';

const debitsRouter = express.Router();

debitsRouter.get('/', getAll);
debitsRouter.post('/', add);
debitsRouter.delete('/', del);

export { debitsRouter }

