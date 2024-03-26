const registerController = require("../../controllers/userController/registerController");

const registerHandler = async (req, res) => {
  try {
    const { name, email, password, interests, image } = req.body;

    // Create user data object
    const userData = {
      name,
      email,
      password,
      interests,
      image,
    };

    // Register the user
    const user = await registerController(userData);

    // Return the newly created user
    res.status(200).json(user);
  } catch (error) {
    // Handle errors
    console.error("Error registering user:", error);
    res
      .status(500)
      .json({ error: "Failed to register user", message: error.message });
  }
};

module.exports = registerHandler;
