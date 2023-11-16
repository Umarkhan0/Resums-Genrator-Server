import express from "express";
const router  = express.Router();
import getReq from "./todosget.js";
import delleteReq from "./deletetodos.js";
import postReq from "./signUp.js";
import getAllusers from "./alluserget.js"
import putReq from "./update.js";
router.use("/todos" , getReq);
router.use("/login" , putReq);
router.use("/todos" , postReq);
router.use("/todos" , delleteReq);
router.use("/allget" , getAllusers);

export default router;