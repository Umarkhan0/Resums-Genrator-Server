import express from "express";
const router  = express.Router();
import postReq from "./signUp.js";
import getAllusers from "./alluserget.js"
import putReq from "./login.js";
router.use("/login" , putReq);
router.use("/todos" , postReq);
router.use("/allget" , getAllusers);
export default router;