import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import config from "../config/config";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unqiue: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email provided");
      }
    },
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  profile_img: {
    type: String,
  },
  surveys: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Survey",
    },
  ],
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

userSchema.statics.isEmailTaken = async function (email, userId) {
  console.log(email);
  const user = await this.findOne({ email, _id: { $ne: userId } });
  return !!user;
};

// Check if password given matches with user password
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

// Hashes the password before saving it into the DB
userSchema.pre("save", async function (next) {
  const user = this;
  const salt = await bcrypt.genSalt(Number(config.bcrypt.salt));
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});

export const User = mongoose.model("User", userSchema);
