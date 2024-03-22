const { Sponsor } = require('../../db');

const deleteSponsorController = async (sponsorId) => {
  try {
    // Buscamos el patrocinador por su ID
    const sponsor = await Sponsor.findByPk(sponsorId);

    // Si no se encuentra el patrocinador, lanzar un error
    if (!sponsor) {
      throw new Error("Patrocinador no encontrado");
    }

    // Eliminar el patrocinador de la base de datos
    await sponsor.destroy();

    return { message: "Patrocinador eliminado exitosamente" };
  } catch (error) {
    // Si hay un error, lanzar una excepción para manejarlo en el handler
    throw new Error("Error al eliminar el patrocinador");
  }
};

module.exports = deleteSponsorController;
