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
          "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "securepassword",
        interests: "Music, Cooking, Photography",
        type_user: "admin",
        image: 
          "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      
      },
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "strongpassword",
        interests: "Traveling, Painting, Yoga",
        image: 
          "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        
      },
      {
        name: "John Jackson",
        email: "john.jackson@example.com",
        password: "secretpassword",
        interests: "Traveling, Reading, Jogging",
        image: 
          "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        
      },
      {
        name: "Alice Walker",
        email: "alice.walker@example.com",
        password: "securepassword123", 
        interests: "Photography, Cooking, Hiking",
        image: 
          "https://images.unsplash.com/photo-1507003203474-0cde3a80e8fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfDB8MHxzZWFyY2h8fDB8fDB8&auto=format&fit=crop&w=500&q=60",
        
      },
      {
        name: "Michael Brown",
        email: "michael.brown@example.com",
        password: "verystrongpassword!", 
        interests: "Coding, Gaming, Music Production",
        image: 
          "https://images.unsplash.com/photo-1508652861770-793bddbd4c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfDB8MHxzZWFyY2h8fDB8fDB8&auto=format&fit=crop&w=500&q=60",
        
      },
      {
        name: "Emily Garcia",
        email: "emily.garcia@example.com",
        password: "anothersecurepass", 
        interests: "Fashion, Art History, Volunteering",
        image: 
          "https://images.unsplash.com/photo-1529626453584-24a8c5e8c450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fDB8MHxzZWFyY2h8fDB8fDB8&auto=format&fit=crop&w=500&q=60",
        
      },
      {
        name: "David Kim",
        email: "david.kim@example.com",
        password: "s0Str0ngP@ss", 
        interests: "Fishing, Camping, Reading Sci-Fi",
        image: 
          "https://images.unsplash.com/photo-1506919024800-73c1f90f78c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIxfDB8MHxzZWFyY2h8fDB8fDB8&auto=format&fit=crop&w=500&q=60",
        
      },
      {
        name: "Sarah Miller",
        email: "sarah.miller@example.com",
        password: "superSecure1234", 
        interests: "Gardening, Traveling, Learning Languages",
        image: 
          "https://images.unsplash.com/photo-1504730677079-b616e7e3d7bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM0fDB8MHxzZWFyY2h8fDB8fDB8&auto=format&fit=crop&w=500&q=60",
        
      },
    ]);

    console.log("User table populated successfully");
  } catch (error) {
    console.error("Error populating User table:", error);
  }
}

module.exports = populateUser;
