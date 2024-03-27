const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Purchase",
    {
      id_purchase: {
        //id_compra
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      quantity: {
        //cantidad
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      purchase_date: {
        //fecha_compra
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
    },
    { timestamps: false }
  );
};
