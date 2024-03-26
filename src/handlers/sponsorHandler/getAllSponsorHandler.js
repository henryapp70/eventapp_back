const getAllSponsorController = require('../../controllers/sponsorController/getAllSponsorController');

const getAllSponsorHandler = async (req, res) => {
  try {
    const sponsors = await getAllSponsorController();
    res.json(sponsors);
  } catch (error) {
    console.error("Error al obtener todos los patrocinadores:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = getAllSponsorHandler;

