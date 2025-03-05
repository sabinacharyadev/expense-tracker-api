import express from "express";
import {
  buildErrorResponse,
  buildSuccessResponse,
} from "../utility/responseHelper";
import { findUserById } from "../model/userModel";
import { getTransactions } from "../model/transactionModel";
const transactionRouter = express.Router();

// INDEX |  GET Transactions
transactionRouter.get("/", async (req, res) => {
  try {
    const { authorization } = req.header;
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
