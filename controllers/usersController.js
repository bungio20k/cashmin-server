import { user } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import dotenv from "dotenv";
dotenv.config();

const register = async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password)
    return res.status(400).json({ msg: "username and password are required!" });
  const duplicated = user.findOne({ username: username }).exec();
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
  if (!username || !password)
    return res.status(400).json({ msg: "username and password are required!" });
  const foundUser = await user.findOne({ username: username }).exec();
  if (!foundUser) return res.sendStatus(401);

  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    const token = jwt.sign(
      { username: foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    res.json({ accessToken: token });
  } else res.sendStatus(401);
};

const updateUser = (req, res) => {};

export { register, login };
