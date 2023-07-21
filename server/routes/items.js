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
    const itemId = req.params.itemId;
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

//UPDATE items
router.put('/:id', async (req,res, next)=> {
  let id = req.params.id
  let item = await Item.findByPk(id)
  const {title, description, price, category, image} = req.body
  try{
   if(item){
    item.title = title
    item.description = description
    item.price = price
    item.category = category
    item.image = image
    await item.save()
    res.send(item)
   }
  }catch (error) {
    next(error)
  }
})

//add item
router.post('/item', async (req, res, next) => {
  try {
    const { title, description, price, category, image } = req.body;

    const newItem = await Item.create({
      title,
      description,
      price,
      category,
      image
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).json({ error: 'Failed to add item' });
  }
});

module.exports = router;