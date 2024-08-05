import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import Routes from "./routes/index.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDb is Connected"))
  .catch(() => console.log("MongoDb not Connected"));

app.get("/", (req, res) => {
  res.json("APP");
});
app.use("/", Routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`${PORT} has been listened`));
