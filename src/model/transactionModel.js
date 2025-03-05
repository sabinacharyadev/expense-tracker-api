import transactionModel from "../schema/transactionSchema";

export const createTransaction = (transactionObject) => {
  return transactionModel(transactionObject).save();
};

export const getTransactions = (userId) => {
  return transactionModel.find({ userId });
};
