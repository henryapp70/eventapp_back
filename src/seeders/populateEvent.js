const { Event } = require("../db");

async function populateEvent() {
  try {
    const events = await Event.bulkCreate([
      {
        name: "Tech Conference 2024",
        description:
          "Annual technology conference showcasing the latest innovations.",
        start_date: "2024-07-15",
        end_date: "2024-07-17",
        start_hour: "09:00:00",
        end_hour: "17:00:00",
        location: "Convention Center",
        category: "Conference",
        access: "paid",
        id_user: 1,
        image: [
          "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        city: "New York",
      },
      {
        name: "Art Exhibition",
        description:
          "Exhibition featuring contemporary artworks from local artists.",
        start_date: "2024-08-20",
        end_date: "2024-08-25",
        start_hour: "10:00:00",
        end_hour: "18:00:00",
        location: "Art Gallery",
        category: "Exhibition",
        access: "free",
        id_user: 2,
        image: [
          "https://images.unsplash.com/photo-1634115198971-a8163e755915?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFydCUyMGV4aGliaXRpb258ZW58MHx8MHx8fDA%3D",
        ],
        city: "Los Angeles",
      },
      {
        name: "Music Festival",
        description:
          "Annual music festival featuring performances by renowned artists.",
        start_date: "2024-09-10",
        end_date: "2024-09-12",
        start_hour: "16:00:00",
        end_hour: "23:00:00",
        location: "Outdoor Venue",
        category: "Festival",
        access: "paid",
        id_user: 1,
        image: [
          "https://images.unsplash.com/photo-1582711012124-a56cf82307a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBmZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D",
        ],
        city: "Paris",
      },
      {
        name: "Summer Jazz Fest",
        description:
          "A celebration of jazz music with performances by talented artists.",
        start_date: "2025-07-20",
        end_date: "2025-07-22",
        start_hour: "18:00:00",
        end_hour: "22:00:00",
        location: "City Park Amphitheater",
        category: "Festival",
        access: "free",
        id_user: 2,
        image: [
          "https://images.unsplash.com/photo-1525994886773-080587e161c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amF6eiUyMHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D",
        ],
        city: "London",
      },
      {
        name: "Technology Summit 2024",
        description: "Annual summit highlighting the future of technology.",
        start_date: "2024-10-15",
        end_date: "2024-10-17",
        start_hour: "08:00:00",
        end_hour: "18:00:00",
        location: "Tech Center",
        category: "Summit",
        access: "paid",
        id_user: 3,
        image: [
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_640.jpg",
        ],
        city: "San Francisco",
      },
      {
        name: "Artisan Market",
        description: "Monthly market featuring handmade crafts and goods.",
        start_date: "2024-11-05",
        end_date: "2024-11-07",
        start_hour: "10:00:00",
        end_hour: "16:00:00",
        location: "Town Square",
        category: "Market",
        access: "free",
        id_user: 4,
        image: [
          "https://plus.unsplash.com/premium_photo-1682091891377-e95e88c08d8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxhcnRpc2FuJTIwbWFya2V0fGVufDB8fDB8fHww",
        ],
        city: "Seattle",
      },
      {
        name: "Fashion Show",
        description:
          "Annual fashion show featuring the latest trends and designs.",
        start_date: "2024-04-10",
        end_date: "2024-04-12",
        start_hour: "19:00:00",
        end_hour: "23:00:00",
        location: "Fashion Mall",
        category: "Fashion Show",
        access: "paid",
        id_user: 3,
        image: [
          "https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        city: "New York",
      },
      {
        name: "Art Workshop",
        description:
          "Interactive workshop for aspiring artists to learn new techniques.",
        start_date: "2024-11-10",
        end_date: "2024-11-10",
        start_hour: "14:00:00",
        end_hour: "22:00:00",
        location: "Art Studio",
        category: "Workshop",
        access: "free",
        id_user: 1,
        image: [
          "https://images.unsplash.com/photo-1560831340-b9679dc9e9f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        city: "Chicago",
      },
      {
        name: "Food Truck Festival",
        description:
          "Outdoor festival featuring a variety of food trucks offering delicious cuisine.",
        start_date: "2024-04-05",
        end_date: "2024-04-07",
        start_hour: "11:00:00",
        end_hour: "21:00:00",
        location: "City Park",
        category: "Food Festival",
        access: "free",
        id_user: 2,
        image: [
          "https://plus.unsplash.com/premium_photo-1683121624323-0c5bf3ca6af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2QlMjB0cnVjayUyMGZlc3RpdmFsfGVufDB8fDB8fHww",
        ],
        city: "Austin",
      },
      {
        name: "Science Fair",
        description:
          "Annual fair showcasing student projects and experiments in science and technology.",
        start_date: "2024-07-15",
        end_date: "2024-07-17",
        start_hour: "10:00:00",
        end_hour: "16:00:00",
        location: "Science Museum",
        category: "Fair",
        access: "free",
        id_user: 2,
        image: [
          "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVyaWElMjBkZSUyMGNpZW5jaWElMjBhbCUyMGFpcmUlMjBsaWJyZXxlbnwwfHwwfHx8MA%3D%3D",
        ],
        city: "Seattle",
      },
      {
        name: "Rock Concert 2024",
        description:
          "Live concert featuring top rock bands from around the world.",
        start_date: "2024-08-20",
        end_date: "2024-08-20",
        start_hour: "18:00:00",
        end_hour: "22:00:00",
        location: "Stadium",
        category: "Music",
        access: "paid",
        id_user: 3,
        image: [
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uY2VydHxlbnwwfDB8MHx8fDA%3D",
        ],
        city: "Los Angeles",
      },
      {
        name: "Basketball Championship",
        description: "Final match of the basketball championship.",
        start_date: "2024-09-10",
        end_date: "2024-09-10",
        start_hour: "20:00:00",
        end_hour: "22:00:00",
        location: "Arena",
        category: "Sports",
        access: "paid",
        id_user: 4,
        image: [
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbHxlbnwwfDB8MHx8fDA%3D",
        ],
        city: "Chicago",
      },
    ]);

    console.log("Event table populated successfully");
  } catch (error) {
    console.error("Error populating Event table:", error);
  }
}

module.exports = populateEvent;
