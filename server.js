import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectToMongoDB } from "./src/config/dbConfig.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

connectToMongoDB();

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log("Server successfully running on PORT : " + PORT);
});
