const { Schema, model } = require("mongoose");
const { handdleMongooseError } = require("../helpers");
const Joi = require("joi");

const emailRegexp = /^\w+([[\].-]?\w+)*@\w+([[\].-]?\w+)*(\.\w{2,3})+$/;

const passwordList = [true, "Set password for user"];
const emailList = [true, "Email is required"];
const subscriptionList = ["starter", "pro", "business"];
const verificationTokenList = [true, "Verify token is required"];

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: passwordList,
      minlength: 6,
    },
    email: {
      type: String,
      required: emailList,
      match: emailRegexp,
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscriptionList,
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: verificationTokenList,
    },
    },
  
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handdleMongooseError);

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required().pattern(emailRegexp),
  subscription: Joi.string(),
});

const emailSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegexp),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required().pattern(emailRegexp),
});

const schemas = {
  registerSchema,
  emailSchema,
  loginSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};