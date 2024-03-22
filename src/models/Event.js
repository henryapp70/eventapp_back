const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Event",
    {
      id_event: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      start_date: {
        //fecha_inicio
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        //fecha_fin
        type: DataTypes.DATE,
        allowNull: false,
      },
      start_hour: {
        //hora_inicio
        type: DataTypes.TIME,
        allowNull: false,
      },
      end_hour: {
        //hora_fin
        type: DataTypes.TIME,
        allowNull: false,
      },
      location: {
        //ubicacion
        type: DataTypes.STRING,
        allowNull: true,
      },
      event_type: {
        //tipo_evento
        type: DataTypes.STRING,
        allowNull: true,
      },
      access: {
        type: DataTypes.STRING,
        defaultValue: "free",
        allowNull: true,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING), 
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
