import { user } from "../models/userModel.js";
import bcrypt from "bcrypt";

const updateProfile = async (req, res) => {
    try {
        const userData = await user.findOne({ username: req.username });
        if (!userData) { return res.status(404).send({ "error": "user not found" }); }

        if (req.body == null || req.body == {})
            return res.status(400).send("Cannot update empty body, check your request");

        userData.profile = req.body

        userData.save().then(() => {
            return res.status(200).send(`update account sucessfully`);
        });
    }
    catch (err) {
        return res.status(500).send({ "error": err.message });
    }
}

const updatePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const foundUser = await user.findOne({ username: req.username }).exec();
    if (!foundUser) return res.sendStatus(404);

    const match = await bcrypt.compare(oldPassword, foundUser.password);
    if (match) {
        const hashPwd = await bcrypt.hash(newPassword, 10);
        foundUser.password = hashPwd;
        foundUser
            .save()
            .then(() => {
                return res.status(200).send('update new password sucessfully');
            })
            .catch(err => {
                return res.status(500).send({ "err": err.message });
            })
    } else res.sendStatus(401);

}

export {
    updateProfile,
    updatePassword
}