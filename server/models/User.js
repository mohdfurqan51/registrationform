const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },
  father: {
    type: String,
    required: [true, "Please Enter Father Name"],
  },
  mother: {
    type: String,
    required: [true, "Please Enter Mother Name"],
  },
  wife: {
    type: String,
    required: [true, "Please Enter Wife Name"],
  },
  kids: {
    type: Number,
    required: [true, "Please Enter No of kids"],
  },
  urgentcontact: {
    type: Number,
    required: [true, "Please Enter Urgent Contact"],
  },
  gender: {type: String, enum: ["male", "female", "other"]},
  country: {type: String, required: [true, "Please Enter Country"]},
  nationalid: {type: String, required: [false, "Please Enter National ID"]},
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    minlength: [6, "Minimum password length is 6"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
