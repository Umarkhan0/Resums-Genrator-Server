import express from "express";
const router = express.Router();
import todosArr from "./data.js";
router.get("/", (req, res) => {
    res.status(200).send(todosArr);
});
export default router;