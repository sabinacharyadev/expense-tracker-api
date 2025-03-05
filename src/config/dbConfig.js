import mongoose from "mongoose";

const DATABASE_NAME = "expense-tracker";

const CONNECTION_URI = process.env.BASE_URL + DATABASE_NAME;

export const connectToMongoDB = () => {
  try {
    const connect = mongoose.connect(CONNECTION_URI);
    if (connect) {
      console.log("Database connected successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
