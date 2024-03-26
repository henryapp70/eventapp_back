const { User } = require("../../db");

const registerUserController = async (userData) => {
  const { email } = userData;

  // Check if the user with the provided email already exists
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("Email already registered");
  }

  // Create a new user
  const newUser = await User.create(userData);
  return newUser;
};

module.exports = registerUserController;
