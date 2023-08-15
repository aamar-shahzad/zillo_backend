/* eslint-disable quotes */
const app = require("./app");
require("dotenv").config();
// eslint-disable-next-line import/order
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
console.log("url is ", mongoString); // eslint-disable-
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
