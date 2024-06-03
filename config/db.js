const mongoose = require("mongoose");
function connectDB() {
  mongoose
    .connect(process.env.URL)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(`error is ${err}`);
    });
}
module.exports = connectDB;
