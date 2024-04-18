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
        image:
          "https://images.pexels.com/photos/4655426/pexels-photo-4655426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "securepassword",
        interests: "Music, Cooking, Photography",
        type_user: "admin",
        image:
          "https://images.pexels.com/photos/4927361/pexels-photo-4927361.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "strongpassword",
        interests: "Traveling, Painting, Yoga",
        image:
          "https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "John Jackson",
        email: "john.jackson@example.com",
        password: "secretpassword",
        interests: "Traveling, Reading, Jogging",
        image:
          "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Alice Walker",
        email: "alice.walker@example.com",
        password: "securepassword123",
        interests: "Photography, Cooking, Hiking",
        image:
          "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Michael Brown",
        email: "michael.brown@example.com",
        password: "verystrongpassword!",
        interests: "Coding, Gaming, Music Production",
        image:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Emily Garcia",
        email: "emily.garcia@example.com",
        password: "anothersecurepass",
        interests: "Fashion, Art History, Volunteering",
        image:
          "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "David Kim",
        email: "david.kim@example.com",
        password: "s0Str0ngP@ss",
        interests: "Fishing, Camping, Reading Sci-Fi",
        image:
          "https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Sarah Miller",
        email: "sarah.miller@example.com",
        password: "superSecure1234",
        interests: "Gardening, Traveling, Learning Languages",
        image:
          "https://images.pexels.com/photos/20393339/pexels-photo-20393339/free-photo-of-a-woman-with-red-hair-and-green-fur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ]);

    console.log("User table populated successfully");
  } catch (error) {
    console.error("Error populating User table:", error);
  }
}

module.exports = populateUser;
