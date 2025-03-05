import transactionModel from "../schema/transactionSchema.js";

export const createTransaction = (transactionObject) => {
  return transactionModel(transactionObject).save();
};

export const getTransactions = (userId) => {
  return transactionModel.find({ userId });
};

export const deleteTransaction = (selectedIds) => {
  return transactionModel.deleteMany({ _id: selectedIds });
};
