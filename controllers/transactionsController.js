import {user} from '../models/userModel.js';

const add = async (req, res) => {
    try {
        const userData = await user.findOne({ username: req.username });
        if (!userData) return res.sendStatus(404);
        const {walletId, ...newTransaction} = req.body;
        
        const index = userData.wallets.findIndex((w) => w._id == walletId)
        userData.wallets[index].transactions.push(newTransaction);

        userData.save().then(() => {res.status(200).send("new transaction saved")});
    }
    catch (err) { res.status(500).send({"error": err.message});}
}

export {
    add,
}