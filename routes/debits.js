import express from 'express';
import { getAll, add, del, sync } from '../controllers/debitsController.js';

const debitsRouter = express.Router();

debitsRouter.get('/', getAll);
debitsRouter.post('/', add);
debitsRouter.delete('/', del);
debitsRouter.put('/', sync);

export { debitsRouter }

