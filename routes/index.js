import { usersRouter } from './users.js'

const router = (app) => {
    app.use('/api/v1/users', usersRouter)
}

export { router }