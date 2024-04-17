const { Rating } = require("../../db");

const getReviewsFromUserHandler = async (req, res) => {
  try {
    const { idEvent, idUser } = req.params;

    const ratings = await Rating.findAll({
      where: { id_event: idEvent },
    });

    if (!ratings.length) {
      return res
        .status(404)
        .json({ message: "No reviews associated to that event." });
    }

    const ratingsFromUsers = ratings.filter(
      (rating) => rating.id_user === idUser
    );

    if (!ratingsFromUsers.length) {
      return res
        .status(404)
        .json({ message: "No reviews found for this user." });
    }
    res.status(200).json(ratingsFromUsers);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ message: "Error fetching reviews" });
  }
};

module.exports = getReviewsFromUserHandler;
