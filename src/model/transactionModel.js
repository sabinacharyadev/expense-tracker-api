import transactionModel from "../schema/transactionSchema";

export const getTransactions = (userId) => {
  return transactionModel.find({ userId });
};
