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

//ADD /items/ 
router.post('/item', async (req, res, next) => {
  try {
    const { name, description, price, category, image_url } = req.body;
    
    const newItem = await Item.create({
      name,
      description,
      price,
      category,
      image_url
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).json({ error: 'Failed to add item' });
  }
});


module.exports = router;
