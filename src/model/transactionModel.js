import transactionModel from "../schema/transactionSchema.js";

export const createTransaction = (transactionObject) => {
  return transactionModel(transactionObject).save();
};

export const getTransactions = (userId) => {
  return transactionModel.find({ userId });
};
