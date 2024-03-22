const { Event } = require("../../db"); 

const getAllEventsController = async () => {
  try {
    return await Event.findAll();
  } catch (error) {
    throw error;
  }
};

module.exports =  getAllEventsController;