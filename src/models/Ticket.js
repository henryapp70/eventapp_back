const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ticket", //Entrada
    {
      id_ticket: {
        //id_entrada
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ticket_type: {
        //tipo_entrada
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        //precio
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      available_quantity: {
        //cantidad_disponible
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sell_by_date: {
        //fecha_limite_venta
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
}