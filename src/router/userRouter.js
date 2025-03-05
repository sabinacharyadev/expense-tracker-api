import express from "express";
import {
  buildErrorResponse,
  buildSuccessResponse,
} from "../utility/responseHelper";
import { createUser } from "../model/userModel";
import { hashPassword } from "../utility/bcryptHelper";

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = hashPassword(password);

    const user = await createUser({ name, email, hashPassword });
    user._id
      ? buildSuccessResponse(res, user, "User created successfully")
      : buildErrorResponse(res, "User not created");
  } catch (error) {
    buildErrorResponse(res, "Something went wrong");
  }
});

export default userRouter;
