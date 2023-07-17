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

// DELETE /items
router.delete("/", async (req, res, next) => {
  try {
    await Item.destroy({ where: {} });
    res.send("All items have been deleted");
  } catch (error) {
    next(error);
  }
});

// DELETE /items/:itemID
router.delete("/:itemId", async (req, res, next) => {
  try {
    const itemID = req.params.itemID;
    const item = await Item.findByPk(itemId);
    if (!item) {
      res.status(400).send("Item not found");
    } else {
      await item.destroy();
      res.send("Item has been deleted");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
