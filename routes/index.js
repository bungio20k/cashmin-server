import { usersRouter } from './users.js';
import { walletsRouter } from './wallets.js';
import { debitsRouter } from './debits.js';
import { transactionsRouter } from './transactions.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = (app) => {
    app.use('/api/v1/users', usersRouter);
    app.use('/api/v1/wallets', authMiddleware, walletsRouter);
    app.use('/api/v1/debits', authMiddleware, debitsRouter);
    app.use('/api/v1/transactions', authMiddleware, transactionsRouter);
}

export { router }
