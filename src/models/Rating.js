const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Rating = sequelize.define(
    "Rating",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    { timestamps: false }
  );
  return Rating;
};
