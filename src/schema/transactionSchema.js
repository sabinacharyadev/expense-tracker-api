import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  type: {
    type: String,
    trim: true,
    lowercase: true,
    default: "expense",
  },
  amount: {
    type: Number,
    trim: true,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
});

const transactionModel = mongoose.model("transaction", transactionSchema);
export default transactionModel;
