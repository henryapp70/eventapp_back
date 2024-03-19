const { Sponsor } = require("../db");

async function populateSponsor() {
  try {
    const sponsors = await Sponsor.bulkCreate([
      {
        enterprise_name: "Madisson Start Up",
        description: "Description for Madisson Start Up.",
      },
      {
        enterprise_name: "Tech Innovations Inc.",
        description: "Description for Tech Innovations Inc.",
      },
      {
        enterprise_name: "Global Solutions Co.",
        description: "Description for Global Solutions Co.",
      },
    ]);

    console.log("Sponsor table populated successfully");
  } catch (error) {
    console.error("Error populating Sponsor table:", error);
  }
}

module.exports = populateSponsor;
