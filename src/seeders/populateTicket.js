const { Ticket } = require("../db");

async function populateTicket() {
  try {
    const tickets = await Ticket.bulkCreate([
      {
        ticket_type: "General Admission",
        price: 45.5,
        available_quantity: 10000,
        sell_by_date: "2025-10-01",
        id_event: 1,
      },
      {
        ticket_type: "VIP",
        price: 120.0,
        available_quantity: 500,
        sell_by_date: "2025-10-01",
        id_event: 2,
      },
      {
        ticket_type: "Student Discount",
        price: 30.0,
        available_quantity: 2000,
        sell_by_date: "2025-10-01",
        id_event: 3,
      },
      {
        ticket_type: "Early Bird",
        price: 50.0,
        available_quantity: 1000,
        sell_by_date: "2025-10-01",
        id_event: 4,
      },
    ]);

    console.log("Ticket table populated successfully");
  } catch (error) {
    console.error("Error populating Ticket table:", error);
  }
}

module.exports = populateTicket;
