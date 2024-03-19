const { Purchase } = require("../db");

async function populatePurchase() {
  try {
    const purchases = await Purchase.bulkCreate([
      {
        quantity: 4,
        purchase_date: "2025-09-10",
        id_user: 2,
        id_ticket: 1,
      },
      {
        quantity: 2,
        purchase_date: "2025-09-12",
        id_user: 3,
        id_ticket: 2,
      },
      {
        quantity: 1,
        purchase_date: "2025-09-13",
        id_user: 1,
        id_ticket: 3,
      },
      {
        quantity: 3,
        purchase_date: "2025-09-14",
        id_user: 4,
        id_ticket: 4,
      },
    ]);

    console.log("Purchase table populated successfully");
  } catch (error) {
    console.error("Error populating Purchase table:", error);
  }
}

module.exports = populatePurchase;
