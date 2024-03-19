const { Followup } = require("../db");

async function populateFollowup() {
  try {
    const followups = await Followup.bulkCreate([
      {
        id_user_follower: 1,
        id_user_followee: 2,
      },
      {
        id_user_follower: 2,
        id_user_followee: 1,
      },
      {
        id_user_follower: 1,
        id_user_followee: 3,
      },
      {
        id_user_follower: 3,
        id_user_followee: 1,
      },
      {
        id_user_follower: 1,
        id_user_followee: 4,
      },
      {
        id_user_follower: 4,
        id_user_followee: 1,
      },
    ]);

    console.log("Followup table populated successfully");
  } catch (error) {
    console.error("Error populating Followup table:", error);
  }
}

module.exports = populateFollowup;
