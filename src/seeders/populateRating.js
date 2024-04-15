const { Rating } = require("../db");

async function populateRating() {
  try {
    const ratings = await Rating.bulkCreate([
      {
        id_event: 1,
        id_user: 2,
        comment: "It could be better!",
        value: 2,
      },
      {
        id_event: 2,
        id_user: 1,
        comment: "It was terrible!",
        value: 1,
      },
      {
        id_event: 3,
        id_user: 1,
        comment: "It was so funny!",
        value: 4,
      },
      {
        id_event: 1,
        id_user: 3,
        comment: "It was so funny!",
        value: 4,
      },
      {
        id_event: 4,
        id_user: 1,
        comment: "There is room for improvement!",
        value: 3,
      },
      {
        id_event: 2,
        id_user: 2,
        comment: "A bit disappointed.",
        value: 3,
      },
      {
        id_event: 1,
        id_user: 4,
        comment: "Looking forward to attending again!",
        value: 4,
      },
      {
        id_event: 3,
        id_user: 3,
        comment: "Needs some improvement.",
        value: 2,
      },
    ]);

    console.log("Rating table populated successfully");
  } catch (error) {
    console.error("Error populating Rating table:", error);
  }
}

module.exports = populateRating;
