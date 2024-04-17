const { Rating } = require("../../db");

const getReviewsHandler = async (req, res) => {
  try {
    const { idEvent } = req.params;

    const ratings = await Rating.findAll({
      where: { id_event: idEvent },
    });

    if (!ratings.length) {
      return res
        .status(404)
        .json({ message: "No reviews associated to that event." });
    }

    res.status(200).json(ratings);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ message: "Error fetching reviews" });
  }
};

module.exports = getReviewsHandler;
