import { usersRouter } from './users.js';
import { walletsRouter } from './wallet.js';

const router = (app) => {
    app.use('/api/v1/users', usersRouter)
    app.use('/api/v1/wallets', walletsRouter)
}

export { router }
