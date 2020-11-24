var express = require("express");
var router = express.Router();
const dbUsers = require("./../db/users.json");

function isAgeValid(age, minAge, maxAge) {
  return age >= minAge && age <= maxAge;
}

function filterUsers(minAge, maxAge) {
  return dbUsers.filter(x => isAgeValid(x.age, minAge, maxAge));
}

router.get("/", function(req, res, next) {
  const { minAge, maxAge } = req.query;

  const users = filterUsers(parseInt(minAge), parseInt(maxAge));

  res.json({ users: users });
});

module.exports = {
  router,
  filterUsers,
  isAgeValid
};
