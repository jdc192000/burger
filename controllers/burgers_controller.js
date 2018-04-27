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
    console.log(hbsObject);
    burger.mostPopular(function (data){
      popular = {
        popular_burger: data
      };
      console.log(hbsObject, popular);
      res.render("index", {hbsObject, popular});
      // res.render("index", hbsObject);
      // res.render("index", popular);
    });
  });
});

router.post("/api/burger", function (req, res) {
  burger.insertOne(req.body, function(result){

    if (result.affectedRows == 0) {
      console.log(res);
      return res.status(404).end();
    } else {
      console.log("new burger added");
      res.status(200).end();
    }
  })
});

// router.post("/api/burger", function(req, res) {
//   console.log("got here");
//   burger.insertOne(req.body, function(result) {
//       res.json({ id: result.insertId });
//   })
// });

router.put("/api/burger/:id", function (req, res) {
  var burgerId = req.params.id;
  var val = {
    devoured: 1
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
