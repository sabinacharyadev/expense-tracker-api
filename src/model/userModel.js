import userModel from "../schema/userSchema";

export const createUser = (userObject) => {
  userModel(userObject).save();
};

export const findUserByEmail = (email) => {
  userModel.find({ email });
};
