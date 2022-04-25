import { user } from '../models/userModel.js';

const getData = (req, res) => {
    res.send('All user information');
}

export {
    getData
}