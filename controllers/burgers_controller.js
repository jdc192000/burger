var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  var hbsObject = {};
  var popular = {};
  burger.selectAll(function (data) {
    hbsObject = {
      burgers: data
    };
    burger.mostPopular(function (data) {
      popular = {
        popular_burger: data
      };
      res.render('index', {
        burgers: hbsObject.burgers,
        popular_burger: popular.popular_burger[0].popular_burger
      });
    });
  });
});

router.post("/api/burger", function (req, res) {
  burger.insertOne(req.body, function (result) {

    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

router.put("/api/burger/:id", function (req, res) {
  var burgerId = req.params.id;

  var val = {
    devoured: 1,
    reordered: 0
  }

  burger.updateOne(val, burgerId, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

module.exports = router;
