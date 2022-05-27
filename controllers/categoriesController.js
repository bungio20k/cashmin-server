import { user } from "../models/userModel.js";

const add = async (req, res) => {
    try {
        const userData = await user.findOne({ username: req.username });
        if (!userData) { return res.status(404).send({"error": "user not found"}); }

        const newCategory = req.body;
        userData.categories.push(newCategory);
    
        userData
            .save()
            .then(() => {
                return res.status(200).send(`${req.body.name} - ${req.body.icon} added sucessfully`);
            })
            .catch((err) => {
                return res.status(500).send(err.message);
            })
    }
    catch (err) {
        return res.status(500).send({"error": err.message});
    }
}

const update = async (req, res) => {
    try {
        const userData = await user.findOne({ username: req.username });
        if (!userData) { return res.status(404).send({"error": "user not found"}); }

        const {_id, ...categoryInfo} = req.body;
        const index = userData.categories.findIndex(e => e._id == _id);
        userData.categories[index] = categoryInfo;
        
        userData
            .save()
            .then(() => {
                return res.status(200).send(`${categoryInfo.name} - ${categoryInfo.icon} update sucessfully`);
            })
            .catch((err) => {
                return res.status(500).send(err.message);
            })
    }
    catch (err) {
        return res.status(500).send({"error": err.message});
    }
}

const remove = async (req, res) => {
    try {
        const userData = await user.findOne({ username: req.username });
        if (!userData) { return res.status(404).send({"error": "user not found"}); }

        userData.categories = userData.categories.filter(e => e._id != req.body._id)
        
        userData
            .save()
            .then(() => {
                return res.status(200).send(`${req.body._id} delete sucessfully`);
            })
            .catch((err) => {
                return res.status(500).send(err.message);
            })
    }
    catch (err) {
        return res.status(500).send({"error": err.message});
    }
}

export { 
    add,
    update,
    remove
}