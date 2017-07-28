var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  burger.select(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insert([
    "burger_name"
  ], [
    req.body.name
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
  	burger_name: req.body.name
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
