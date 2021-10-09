var express = require("express");
var router = express.Router();
var registerChecks = require("./../middlewares/registerChecks");
var register = require("./../controllers/register");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/***
 * @requires {email, firstName, lastName, password, confirmPassword } - req.body
 * @description
 ***/

router.get("/register", function (req, res) {
  res.send("Hemlo!!");
});

router.post("/register", registerChecks);

module.exports = router;
