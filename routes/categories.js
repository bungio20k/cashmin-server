import express from 'express';
import { add, update, remove } from '../controllers/categoriesController.js';

const categoriesRouter = express.Router();

categoriesRouter.post('/', add);
categoriesRouter.delete('/', remove);
categoriesRouter.put('/', update);

export { categoriesRouter }

