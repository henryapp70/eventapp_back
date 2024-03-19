const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Followup", //Seguimiento
    {
      id_followup: {
        //id_seguimiento
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
