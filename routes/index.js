import { usersRouter } from './users.js';
import { allDataRouter } from './allData.js';
import { walletsRouter } from './wallets.js';
import { debitsRouter } from './debits.js';
import { transactionsRouter } from './transactions.js';
import { settingsRouter } from './settings.js';
import { accountRouter } from './account.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = (app) => {
    app.use('/api/v1/users', usersRouter);
    app.use('/api/v1/all-data', authMiddleware, allDataRouter);
    app.use('/api/v1/wallets', authMiddleware, walletsRouter);
    app.use('/api/v1/debits', authMiddleware, debitsRouter);
    app.use('/api/v1/transactions', authMiddleware, transactionsRouter);
    app.use('/api/v1/settings', authMiddleware, settingsRouter);
    app.use('/api/v1/account', authMiddleware, accountRouter);
}

export { router }
