import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log("Server successfully running on :" + PORT);
});
