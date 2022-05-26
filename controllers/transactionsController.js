import {user} from '../models/userModel.js';

const getAll = async (req, res) => {
    try {
        const userData = await user.findOne({ username: req.username });
        if (!userData) 
            return res.status(404).send({ "error": "User not found"});

        // query form: GET /api/v1/transactions?wallet=<walletName>
        const currentWalletName = req.query.wallet.toString();

        const currentWallet = userData.wallets.find( (wallet) => wallet.name === currentWalletName );

        res.send(currentWallet.transactions);
    }
    catch (err) { res.status(500).send(err.message); }
}

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
    getAll,
    add,
}