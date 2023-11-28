import express from "express";
import User from "../models/user.js";
const router = express.Router();

router.post('/', async (req, res) => {
    const users = await User.findOne({ email: req.body.email });
    let verifyCode = users.vrifycode;
    let usertypeOtp = req.body.OTP;
    console.log(verifyCode);
    if (verifyCode == usertypeOtp) {
        // await User.updateOne({vrifycode:"something"})
    res.status(200).send(true)
    } else {
    res.status(200).send(false)
    };
});
export default router;