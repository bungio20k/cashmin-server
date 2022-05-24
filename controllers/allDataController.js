import { user } from "../models/userModel.js";

const get = async (req, res) => {
    try {
        const userData = await user.findOne({ username: req.username });
        if (userData) res.send(userData);
        else res.sendStatus(404);
    }
    catch (err) { res.status(500).send({"error": err.message});}
}


export { 
    get
}