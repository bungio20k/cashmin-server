import { user } from "../models/userModel.js";

const getAll = async (req, res) => {
    user.findOne({ username: req.body.username }, (err, user) => {
        if (err) console.log(err);
        else {
            res.send(user.wallets)
        }
    })
}

export { getAll }