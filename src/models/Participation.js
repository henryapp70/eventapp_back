const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Participation",
    {
      id_participation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      register_date: {
        //fecha_registro
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        //estado
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );}