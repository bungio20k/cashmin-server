import { user } from "../models/userModel.js";

const update = async (req, res) => {
    try {
        const userData = await user.findOne({ username: req.username });
        if (!userData) { return res.status(404).send({ "error": "user not found" }); }
        
        const {daily, weekly, monthly} = req.body;
        if (daily != null) userData.limits.daily = daily;
        if (weekly != null) userData.limits.weekly = weekly;
        if (monthly != null) userData.limits.monthly = monthly;

        userData.save().then((saved) => {
            return res.status(200).send("limits updated sucessfully");
        });
    }
    catch (err) {
        return res.status(500).send({ "error": err.message });
    }
}

export {
    update
}