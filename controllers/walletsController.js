import { user } from "../models/userModel.js";

const getAll = async (req, res) => {
    try {
        const userData = await user.findOne({ username: req.username });
        if (userData) res.send(userData.wallets);
        else res.sendStatus(404);
    }
    catch (err) { res.status(500).send({"error": err.message});}
}

const add = async (req, res) => {
    const userData = await user.findOne({ username: req.username });
    if (!userData) { return res.status(404).send({"error": "user not found"}); }
    const newWallet = req.body;
    newWallet.isMain = (userData.wallets[0])? "false" : "true";
    userData.wallets.push(newWallet);
    
    try {
        userData.save().then(() => {
            return res.status(200).send(`${newWallet.name} created sucessfully`);
        });
    }
    catch (err) {
        return res.status(500).send({"error": err.message});
    }
}

const del = async (req, res) => {
    const userData = await user.findOne({ username: req.username });
    if (!userData) { return res.status(404).send({"error": "user not found"}); }
    const id = req.body.walletId;
    
    userData.wallets = userData.wallets.filter((w) => w._id != id);

    try {
        userData.save().then(() => {
            return res.status(200).send(`${id} delete sucessfully`);
        });
    }
    catch (err) {
        return res.status(500).send({"error": err.message});
    }
}



export { 
    getAll,
    add,
    del
}