import express from "express";
import {
  buildErrorResponse,
  buildSuccessResponse,
} from "../utility/responseHelper.js";
import { findUserById } from "../model/userModel.js";
import {
  createTransaction,
  getTransactions,
} from "../model/transactionModel.js";
const transactionRouter = express.Router();

// POST | CREATE Transactions
transactionRouter.post("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { title, type, amount, date, userId } = req.body;
    const user = await findUserById(authorization);
    if (!user._id) {
      return buildErrorResponse(res, "User not authorized");
    }
    const transaction = await createTransaction({
      title,
      type,
      amount,
      date,
      userId,
    });
    transaction._id
      ? buildSuccessResponse(
          res,
          transaction,
          "Transaction created successfully"
        )
      : buildErrorResponse(res, "Could not create transaction");
  } catch (error) {
    buildErrorResponse(res, "Something went wrong");
    console.log(error);
  }
});

// INDEX |  GET Transactions
transactionRouter.get("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    const user = await findUserById(authorization);
    if (!user._id) {
      return buildErrorResponse(res, "User not authorized");
    }
    const transactions = await getTransactions(user._id);
    transactions
      ? buildSuccessResponse(
          res,
          transactions,
          "Transactions fetched successfully"
        )
      : buildErrorResponse(res, "Cannot fetch transactions");
  } catch (error) {
    buildErrorResponse(res, "Something went wrong");
  }
});

export default transactionRouter;
