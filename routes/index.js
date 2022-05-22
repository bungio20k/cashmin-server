import { usersRouter } from './users.js';
import { walletsRouter } from './wallet.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = (app) => {
    app.use('/api/v1/users', usersRouter);
    app.use('/api/v1/wallets', authMiddleware ,walletsRouter);
}

export { router }
