const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Event_Sponsor",
    {},
    { timestamps: false }
  );
}