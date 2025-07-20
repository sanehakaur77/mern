// actual logic
const { userModel } = require("../models/user.Model");
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');

const userSignUp = async (req, res) => {
  //  jab data send kia jata hai from client vo client se api ki body me ata hai
  //  intreview ques destructuring

  const { name, email, password, phoneNumber, age } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "user already exists" });
  }
  try {
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        res.status(400).json({ message: err });
      } else {
        const user = new userModel({
          name,
          email,
          password: hash,
          phoneNumber,
          age,
        });
        await user.save();
        res.status(200).send("user is created successfully");
      }
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "user does not exist" });
  }
  try {
    //  bcrypt hi password ho encrypt karta hai or match karta hai
    //  agar to password match nahi hua to yeh function return false karta hai
    bcrypt.compare(password, user.password, async (err, result) => {
        //  jwt token generate karna hai
        const token=jwt.sign({userID:user._id},'saneha#123',{expiresIn:'1h'});
        console.log(token)
        //  to verify token we can go to jwt.io
      if (!result) {
        return res.status(400).json({ message: "Invalid credentials" });
      } else {
        return res.status(200).json({ message: "login sucessfull" ,token:token});
      }
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
module.exports = {
  userSignUp,
  userLogin,
};
