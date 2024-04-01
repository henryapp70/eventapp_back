const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadSingleImage = upload.single("image");

module.exports = uploadSingleImage;
