const server = require("./src/server");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 5000;
const populateSponsor = require("./src/seeders/populateSponsor.js");
const populateUser = require("./src/seeders/populateUser.js");
const populateEvent = require("./src/seeders/populateEvent.js");
const populateParticipation = require("./src/seeders/populateParticipation.js");
const populateFollowup = require("./src/seeders/populateFollowup.js");
const populateEvent_Sponsor = require("./src/seeders/populateEvent_Sponsor.js");
const populateTicket = require("./src/seeders/populateTicket.js");
const populatePurchase = require("./src/seeders/populatePurchase.js");

conn
  .sync({ force: true })
  .then(() => {
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .then(() => populateSponsor())
  .then(() => populateUser())
  .then(() => populateEvent())
  .then(() => populateParticipation())
  .then(() => populateFollowup())
  .then(() => populateEvent_Sponsor())
  .then(() => populateTicket())
  .then(() => populatePurchase())
  .catch((error) => console.error(error));
