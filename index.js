import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/index.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()
const app = express()


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => console.error(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

router(app)

app.listen(3001, () => {
    console.log('Server is listening on 3001')
})
