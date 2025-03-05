import express from "express";
import {
  buildErrorResponse,
  buildSuccessResponse,
} from "../utility/responseHelper.js";
import { createUser, findUserByEmail } from "../model/userModel.js";
import { comparePassword, hashPassword } from "../utility/bcryptHelper.js";

const userRouter = express.Router();

// CREATE USER || POST
userRouter.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = hashPassword(password);

    const user = await createUser({ name, email, password: hashedPassword });
    user._id
      ? buildSuccessResponse(res, user, "User created successfully")
      : buildErrorResponse(res, "User not created");
  } catch (error) {
    error.code === 11000
      ? buildErrorResponse(res, "User already exists")
      : buildErrorResponse(res, "Something went wrong");
    console.log(error);
  }
});

// LOGIN USER || POST
userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user._id) {
      return buildErrorResponse(res, "User not found");
    }
    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };
    comparePassword(password, user.password)
      ? buildSuccessResponse(res, userData, "Logged in Successfully")
      : buildErrorResponse(res, "Invalid credentials");
  } catch (error) {
    buildErrorResponse(res, "Something went wrong");
    console.log(error);
  }
});

export default userRouter;
