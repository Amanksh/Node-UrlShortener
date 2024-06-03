const shortid = require("shortid");
const { URL } = require("../models/url");
async function handleGenerateNewUrl(req, res) {
  const { body } = req;
  if (!body.url) {
    return res.status(401).json({ msg: "url not provided" });
  }
  const shortId = shortid();
  const result = await URL.create({
    redirectUrl: body.url,
    shortId: shortId,
  });

  return res.status(201).json({ msg: "succesfully created", id: shortId });
}

async function getUrlById(req, res) {
  const {
    params: { shortId },
  } = req;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
}

module.exports = { handleGenerateNewUrl, getUrlById };
