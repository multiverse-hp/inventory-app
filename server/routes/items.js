const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});


//GET /items/ :itemId
router.get("/:id", async (req, res, next) => {
  try {
    let itemId = req.params.id;
    console.log('item id', itemId);
    
    if (!isNaN(+itemId)) {
      // Find item by Id
      const foundItem = await Item.findByPk(itemId, {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      });

      if (!foundItem) {
        return res.status(404).json({ message: "Item not found" });
      }

      return res.status(200).json({ message: "Successfully retrieved item", data: foundItem });
    } else {
      throw new Error(`Invalid ID ${itemId} passed`);
    }
  } catch (err) {
    err.statusCode = 400;
    return next(err);
  }
});

module.exports = router;
