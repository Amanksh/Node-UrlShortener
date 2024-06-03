const express = require("express");
const {
  handleGenerateNewUrl,
  getUrlById,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/", handleGenerateNewUrl);
router.get("/:shortId", getUrlById);

module.exports = router;
