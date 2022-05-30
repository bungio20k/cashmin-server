import express from 'express';
import { add, update, remove, sync } from '../controllers/categoriesController.js';

const categoriesRouter = express.Router();


categoriesRouter.put('/', sync);
categoriesRouter.post('/', add);
categoriesRouter.delete('/', remove);
// categoriesRouter.put('/', update);

export { categoriesRouter }

