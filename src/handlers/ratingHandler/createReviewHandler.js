const { Rating, Event } = require("../../db");

const createReviewHandler = async (req, res) => {
  try {
    const { value, comment, id_event, id_user } = req.body;

    const newRating = await Rating.create({
      value,
      comment,
      id_event,
      id_user,
    });

    const ratings = await Rating.findAll({
      where: { id_event },
    });

    const ratingsArr = ratings.map((rating) => rating.dataValues);
    const average =
      ratingsArr.reduce((acc, curr) => acc + curr.value, 0) / ratingsArr.length;
    // console.log(average);

    const event = await Event.findOne({ where: { id_event } });
    if (event) {
      event.rating = average;
      await event.save();
      console.log("Event rating updated successfully");
    } else {
      console.error("Event not found");
    }

    res.status(201).json({ message: "Review created successfully!" });
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ message: "Error creating review" });
  }
};

module.exports = createReviewHandler;
