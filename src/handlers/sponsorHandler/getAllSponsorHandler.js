const { Sponsor } = require('../../db');

const getAllSponsorHandler = async (req, res) => {
  try {
    const sponsors = await Sponsor.findAll();
    res.json(sponsors);
  } catch (error) {
    console.error("Error al obtener todos los patrocinadores:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = getAllSponsorHandler;
