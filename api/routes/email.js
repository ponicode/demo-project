var express = require("express");
var router = express.Router();

function isEmailValid(email) {
  if (typeof email !== "string") {
    return false;
  }
  const unicodePattern = /[^\x00-\x7F]/;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !unicodePattern.test(email) && re.test(email.toLowerCase());
}

router.post("/", function(req, res, next) {
  const { email } = req.body;

  isValid = isEmailValid(email);
  res.json({ isValid });
});

module.exports = {
  router,
  isEmailValid
};
