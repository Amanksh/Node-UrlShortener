const express = require("express");
require("dotenv").config();
const urlRoute = require("./routes/urlRoute");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
connectDB();
app.use("/url", urlRoute);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
