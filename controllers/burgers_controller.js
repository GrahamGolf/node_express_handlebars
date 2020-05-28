const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.selectAll(function(burgers) {
        res.render("index", {burgers: burgers})
    })
  });

router.post("/", function(req, res){
    burger.insertOne(req.body.burger_name, function(burgers){
        res.render("index", {burgers: burgers})
    })
})

router.put("/", function(req, res) {
    burger.updateOne(function(){

    })
})


module.exports = router