import express from "express";
const app = express();
import router from "./routes/index.js";
import chalk from "chalk";
import mongoose from "./db/index.js";
import 'dotenv/config.js'
const PORT = process.env.PORT || 8000
let db = mongoose.connection;
db.on("error" , console.error.bind(console, "connection error"));
db.once("open" , function () {
    console.log(chalk.blue("db connected!"));
});
app.use(express.json());
app.use("/", (req, res, next) => {
    if (req?.query?.key === "123") {
        next()
app.use("/api", router);
    } else {
        res.status(404).send({ messge: "Rong key" })
    }
})
app.listen(PORT, () => {
    console.log("Server is runing port", PORT);
});