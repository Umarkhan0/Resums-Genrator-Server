import express from "express";
const router = express.Router();
import todosArr from "./data.js";
router.delete("/:id/", (req, res) => {
    const dynamicParam = req.params.id;
    let index = todosArr.findIndex(v => v.id == Number(dynamicParam));
    todosArr.splice(index, 1);
    res.send({ message: "todo deleted sussesfully" })
});
export default router;