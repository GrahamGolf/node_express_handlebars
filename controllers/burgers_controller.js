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

router.put("/burger/:id", function(req, res) {
    console.log("burgers controller", req.params.id)
    burger.updateOne(req.params.id, function(burgers){
        if (burgers.changedRows == 0){
            return res.status(404)
        }
        else {
            res.status(200)
        }
    })
})


module.exports = router