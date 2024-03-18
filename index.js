const server = require("./src/server");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 5000;

conn
  .sync({ force: true })
  .then(() => {
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => console.error(error));
