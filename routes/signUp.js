import express from "express";
const router = express.Router();
import todosArr from "./data.js";
import bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken";
import Joi from "joi";
import User from "../models/user.js";
const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().required()
});

router.post("/", async (req, res) => {
  try{
    const { error } = userSchema.validate(req.body);
    if (error) {
      res.status(400).send({ message: error.details[0].message });
    } else {
    const password = await bcrypt.hash(req.body.password , 10)
const user =  new User({...req.body , password});
const newUser = await user.save()
const token = Jwt.sign({_id: user._id} , "umar")
res.status(200).send({status_code: 200,  user: newUser, token})
    }
  }catch(err){
    res.status(400).send({ status_code: 400,  messge: err.message})
  }

});

export default router;
