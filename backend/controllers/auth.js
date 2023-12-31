import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { passwordGenerator } from "../services/randomGenerator.js";
import { sendEmail } from "../services/mailer.js";

// Creates a new user account with their email id and name
// password is created at the backend and sent to user to their email address which helps verify email address
// password can later be changed
export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, isSeller } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({ error: "User already exist!" });
    }

    const password = passwordGenerator();

    await sendEmail(email, password);

    // stores encrypted password in the database
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      isSeller: isSeller,
    });

    await newUser.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occured!" });
  }
};

// Sign the user into their account and returns a jwt token that is used for authentication of subsequent requests
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ error: "User does not exist!" });
    }

    // encrypts the password used during login and compares with the encrypted password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials!" });
    }

    // jwt token is returned back which has user id hashed into it
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    user.password = null;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: "An error occured!" });
  }
};
