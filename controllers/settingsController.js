import { user } from "../models/userModel.js";

const update = async (req, res) => {
    try {
        const userData = await user.findOne({ username: req.username });
        if (!userData) { return res.status(404).send({"error": "user not found"}); }

        if (req.body == null || req.body == {}) 
            return res.status(400).send("Cannot update empty settings, check your request body");
        
        userData.settings = req.body;
    
        userData.save().then(() => {
            return res.status(200).send(`update new settings sucessfully`);
        });
    }
    catch (err) {
        return res.status(500).send({"error": err.message});
    }
}

export { 
    update
}