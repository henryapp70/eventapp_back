const registerSponsorController = require('../../controllers/sponsorController/registerSponsorController');

const registerSponsorHandler = async (req, res) => {
  try {
    const { enterprise_name, description } = req.body;

    // Llamar al controlador para crear un nuevo patrocinador
    const newSponsor = await registerSponsorController(enterprise_name, description);

    // Devolver el nuevo patrocinador creado como respuesta
    res.status(201).json(newSponsor);
  } catch (error) {
    console.error("Error al registrar un nuevo patrocinador:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = registerSponsorHandler;
