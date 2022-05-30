import { user } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import dotenv from "dotenv";
dotenv.config();

const register = async (req, res) => {
  const { username, password, email } = req.body;
  const duplicated = await user.findOne({ username: username }).exec();
  if (duplicated) return res.sendStatus(409);
  try {
    const hashPwd = await bcrypt.hash(password, 10);
    await user.create({
      username: username,
      email: email,
      password: hashPwd,
    });
    res.status(200).json({ success: `New user ${username} created!` });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await user.findOne({ username: username }).exec();
  if (!foundUser) return res.sendStatus(404);

  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    const token = jwt.sign(
      { username: foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    res.json({ accessToken: token });
  } else res.sendStatus(401);
};

const userInfo = async (req, res) => {
  try {
    const userData = await user.findOne({ username: req.username });
    if (!userData) return res.sendStatus(404);
    return res.send(userData);
  }
  catch (err) {
    return res.status(500).send({'error': err.message});
  }
}

const syncData = async (req, res) => {
  console.log(req.body);
  res.send(req.body);
}

export { 
  register, 
  login, 
  userInfo,
  syncData,
}

