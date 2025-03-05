import userModel from "../schema/userSchema";

export const createUser = (userObject) => {
  return userModel(userObject).save();
};

export const findUserByEmail = (email) => {
  return userModel.find({ email });
};
