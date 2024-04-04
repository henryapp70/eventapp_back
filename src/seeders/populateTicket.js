const { Ticket } = require("../db");

async function populateTicket() {
  try {
    const tickets = await Ticket.bulkCreate([
      {
        ticket_type: "General Admission",
        price: 45.5,
        available_quantity: 10000,
        sell_by_date: "2024-07-14",
        id_event: 1,
        id_user: 1,
      },
      {
        ticket_type: "VIP",
        price: 120.0,
        available_quantity: 500,
        sell_by_date: "2024-08-19",
        id_event: 2,
        id_user: 1,
      },
      {
        ticket_type: "Student Discount",
        price: 30.0,
        available_quantity: 2000,
        sell_by_date: "2024-09-09",
        id_event: 3,
        id_user: 2,
      },
      {
        ticket_type: "Early Bird",
        price: 50.0,
        available_quantity: 1000,
        sell_by_date: "2025-07-19",
        id_event: 4,
        id_user: 2,
      },
      {
        ticket_type: "Charity",
        price: 70.0,
        available_quantity: 1000,
        sell_by_date: "2025-07-19",
        id_event: 4,
        id_user: 1,
      },
    ]);

    console.log("Ticket table populated successfully");
  } catch (error) {
    console.error("Error populating Ticket table:", error);
  }
}

module.exports = populateTicket;
