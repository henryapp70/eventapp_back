const { Sponsor } = require("../db");

async function populateSponsor() {
  try {
    const sponsors = await Sponsor.bulkCreate([
      {
        enterprise_name: "Madisson Start Up",
        description: "Description for Madisson Start Up.",
        image:
          "https://res.cloudinary.com/da6stkkxs/image/upload/v1712340356/madisonLogo_qgrqas.png",
        id_user: 1,
      },
      {
        enterprise_name: "Tech Innovations Inc.",
        description: "Description for Tech Innovations Inc.",
        image:
          "https://res.cloudinary.com/da6stkkxs/image/upload/v1712340379/TechInnovations_u0uiom.png",
        id_user: 2,
      },
      {
        enterprise_name: "Global Solutions Co.",
        description: "Description for Global Solutions Co.",
        image:
          "https://res.cloudinary.com/da6stkkxs/image/upload/v1712340426/GlobalSolutionsCo_yts1r9.png",
        id_user: 1,
      },
      {
        enterprise_name: "Olivia Wilson Gallery.",
        description: "Description for Olivia Wilson Gallery.",
        image:
          "https://res.cloudinary.com/da6stkkxs/image/upload/v1712340502/OliviaWilsonGallery_k7lmom.png",
        id_user: 2,
      },
      {
        enterprise_name: "Hot Chilli Pepper Sauce Company",
        description: "Description for Hot Chilli Pepper Sauce Company.",
        image:
          "https://res.cloudinary.com/da6stkkxs/image/upload/v1712340315/HotSauceCo_crx9my.png",
        id_user: 2,
      },
    ]);

    console.log("Sponsor table populated successfully");
  } catch (error) {
    console.error("Error populating Sponsor table:", error);
  }
}

module.exports = populateSponsor;
