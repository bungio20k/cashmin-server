import express from 'express';
import { updateProfile, updatePassword } from '../controllers/accountController.js';

const accountRouter = express.Router();

accountRouter.put('/password', updatePassword);
accountRouter.put('/profile', updateProfile);

export { accountRouter }
