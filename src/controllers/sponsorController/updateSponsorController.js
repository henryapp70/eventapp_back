const { Sponsor } = require('../../db');

const updateSponsorController = async (sponsorId, updatedData) => {
  try {
    // Buscamos el patrocinador por su ID
    const sponsor = await Sponsor.findByPk(sponsorId);

    // Si no se encuentra el patrocinador, lanzar un error
    if (!sponsor) {
      throw new Error("Patrocinador no encontrado");
    }

    // Actualizar los datos del patrocinador
    await sponsor.update(updatedData);

    return sponsor;
  } catch (error) {
    // Si hay un error, lanzar una excepción para manejarlo en el handler
    throw new Error("Error al actualizar el patrocinador");
  }
};

module.exports = updateSponsorController;
