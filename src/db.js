require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    dialect: "postgres",
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
  Event_Sponsor,
  Event,
  Followup,
  Participation,
  Purchase,
  Sponsor,
  Ticket,
  User,
} = sequelize.models;

// Aca vendrian las relaciones
// Associations

User.belongsToMany(Event, {
  through: Participation,
  foreignKey: "id_user",
});

Event.belongsToMany(User, {
  through: Participation,
  foreignKey: "id_event",
});

User.belongsToMany(User, {
  as: "Follower", //Seguidor
  through: Followup,
  foreignKey: "id_usuario_seguidor",
});

User.belongsToMany(User, {
  as: "Followee", //Seguido
  through: Followup,
  foreignKey: "id_usuario_seguido",
});

Event.hasMany(Ticket, { foreignKey: "id_event" });
Ticket.belongsTo(Event, { foreignKey: "id_event" });

User.hasMany(Purchase, { foreignKey: "id_user" });
Purchase.belongsTo(User, { foreignKey: "id_user" });

Ticket.hasMany(Purchase, { foreignKey: "id_ticket" });
Purchase.belongsTo(Ticket, { foreignKey: "id_ticket" });

Event.belongsToMany(Sponsor, {
  through: Event_Sponsor,
  foreignKey: "id_event",
});

Sponsor.belongsToMany(Event, {
  through: Event_Sponsor,
  foreignKey: "id_sponsor",
});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
