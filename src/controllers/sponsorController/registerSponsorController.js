const { Sponsor } = require('../../db');

const registerSponsorController = async (enterprise_name, description) => {
  try {
    // Crear un nuevo patrocinador en la base de datos
    const newSponsor = await Sponsor.create({
      enterprise_name,
      description,
    });

    return newSponsor;
  } catch (error) {
    // Si hay un error, lanzar una excepción para manejarlo en el handler
    throw new Error("Error al registrar un nuevo patrocinador");
  }
};

module.exports = registerSponsorController;
