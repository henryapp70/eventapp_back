const { User } = require("../db");

async function populateUser() {
  try {
    const users = await User.bulkCreate([
      {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
        interests: "Coding, Reading, Hiking",
        type_user: "admin",
        image: [
          "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        ],
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "securepassword",
        interests: "Music, Cooking, Photography",
        type_user: "admin",
        image: [
          "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        ],
      },
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "strongpassword",
        interests: "Traveling, Painting, Yoga",
        image: [
          "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        ],
      },
      {
        name: "John Jackson",
        email: "johm.jackson@example.com",
        password: "secretpassword",
        interests: "Traveling, Reading, Jogging",
        image: [
          "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        ],
      },
    ]);

    console.log("User table populated successfully");
  } catch (error) {
    console.error("Error populating User table:", error);
  }
}

module.exports = populateUser;
