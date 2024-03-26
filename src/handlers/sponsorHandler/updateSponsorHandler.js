const updateSponsorController = require('../../controllers/sponsorController/updateSponsorController');

const updateSponsorHandler = async (req, res) => {
  try {
    const { id } = req.params; // ID del patrocinador a actualizar
    const updatedData = req.body; // Datos actualizados del patrocinador

    // Llamar al controlador para actualizar el patrocinador
    const updatedSponsor = await updateSponsorController(id, updatedData);

    // Devolver el patrocinador actualizado como respuesta
    res.json(updatedSponsor);
  } catch (error) {
    console.error("Error al actualizar el patrocinador:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = updateSponsorHandler;
