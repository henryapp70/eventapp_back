const { Sponsor } = require("../../db");
// ask where the id_user is going to be sent
const updateSponsorStatusHandler = async (req, res) => {
  const { id, status } = req.params;
  try {
    const updatedSponsor = await Sponsor.findByPk(id);

    if (!updatedSponsor) {
      res.status(404).json({ message: "Sponsor not found" });
      return;
    }

    await updatedSponsor.update({ status });

    res.status(200).json(updatedSponsor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateSponsorStatusHandler;
