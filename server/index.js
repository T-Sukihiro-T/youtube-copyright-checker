import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/api/check", async (req, res) => {
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
