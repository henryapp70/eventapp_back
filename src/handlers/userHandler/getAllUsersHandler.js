const { User } = require("../../db");

const getAllUsersHandler = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();

    // Check if users exist
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    // Return the list of users
    res.status(200).json(users);
  } catch (error) {
    // Handle errors
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getAllUsersHandler;
