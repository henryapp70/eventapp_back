const deleteSponsorController = require('../../controllers/sponsorController/deleteSponsorController');

const deleteSponsorHandler = async (req, res) => {
  try {
    const { id } = req.params; // ID del patrocinador a eliminar

    // Llamar al controlador para eliminar el patrocinador
    const result = await deleteSponsorController(id);

    // Devolver el resultado como respuesta
    res.json(result);
  } catch (error) {
    console.error("Error al eliminar el patrocinador:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = deleteSponsorHandler;
