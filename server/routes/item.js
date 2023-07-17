const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /items
router.get("/", async (req, res, next) => {
  try {
    const sauces = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});


//GET /items/ :itemId
router.get("/:itemId", async (req, res, next) =>{
    
})

module.exports = router;
