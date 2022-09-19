import express from "express";
import data from "./data/data.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("This is home page")
});

app.get("/api/products", (req, res) => {
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Port is running in port ${PORT}`);
})