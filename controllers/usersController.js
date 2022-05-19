import { user } from '../models/userModel.js';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

const login = (req, res) => {
    const user = { user: 'Test' }
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: token })
}

const test = (req, res) => {
    res.send('data');
}

export {
    login,
    test
}