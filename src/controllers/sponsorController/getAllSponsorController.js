const { Sponsor } = require('../../db');

const getAllSponsorController = async () => {
  try {
    const sponsors = await Sponsor.findAll();
    return sponsors;
  } catch (error) {
    throw new Error("Error al obtener todos los patrocinadores");
  }
};

module.exports = getAllSponsorController;
