var express = require("express");
var router = express.Router();

function isEmailValid(email) {
  if (typeof email !== "string") {
    return false;
  }
  const unicodePattern = /[^\x00-\x7F]/
  var re = /[a-z0-9]+(?:\.[a-z0-9]+)*@(?:[a-z0-9]\.[a-z0-9])?/
  return !unicodePattern.test(email) && re.test(email.toLowerCase())
}

router.post("/", function (req, res, next) {
  const { email } = req.body;

  isValid = isEmailValid(email);
  res.json({ isValid });
});

module.exports = router;
