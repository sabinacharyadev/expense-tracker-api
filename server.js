import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectToMongoDB } from "./src/config/dbConfig.js";
import userRouter from "./src/router/userRouter.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

connectToMongoDB();

app.use("/api/user", userRouter);
//app.use('api/transaction' transactionRouter)

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log("Server successfully running on PORT : " + PORT);
});
