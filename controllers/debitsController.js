import { user } from "../models/userModel.js";

const getAll = async (req, res) => {
    try {
        const userData = await user.findOne({ username: req.username });
        if (userData) res.send(userData.debits);
        else res.sendStatus(404);
    }
    catch (err) { res.status(500).send({ "error": err.message }); }
}

const add = async (req, res) => {
    try {
        const userData = await user.findOne({ username: req.username });
        if (!userData) { return res.status(404).send({ "error": "user not found" }); }
        const newDebit = req.body;
        userData.debits.push(newDebit);

        userData.save().then((saved) => {
            return res.status(200).send({
                _id: saved.debits[saved.debits.length - 1]._id.toString()
            });
        });
    }
    catch (err) {
        return res.status(500).send({ "error": err.message });
    }
}

const del = async (req, res) => {
    try {
        const userData = await user.findOne({ username: req.username });
        if (!userData) { return res.status(404).send({ "error": "user not found" }); }
        const id = req.body._id;

        userData.debits = userData.debits.filter((d) => d._id != id);

        userData.save().then(() => {
            return res.status(200).send(`${id} delete sucessfully`);
        });
    }
    catch (err) {
        return res.status(500).send({ "error": err.message });
    }
}



export {
    getAll,
    add,
    del
}