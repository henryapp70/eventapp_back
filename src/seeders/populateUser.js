const { User } = require("../db");

async function populateUser() {
  try {
    const users = await User.bulkCreate([
      {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
        interests: "Coding, Reading, Hiking",
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "securepassword",
        interests: "Music, Cooking, Photography",
      },
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "strongpassword",
        interests: "Traveling, Painting, Yoga",
      },
      {
        name: "John Jackson",
        email: "johm.jackson@example.com",
        password: "secretpassword",
        interests: "Traveling, Reading, Jogging",
      },
    ]);

    console.log("User table populated successfully");
  } catch (error) {
    console.error("Error populating User table:", error);
  }
}

module.exports = populateUser;
