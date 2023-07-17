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
router.get("/:id", async (req, res, next) =>{
    try{
        console.log('item id', req.params.id )
        let item  = await Item.findByPk(req.params.id)
        //     include:[{ model: Item }]
        // });

        if(!item){
            res.sendStatus(404).send('Item not found');
            next();
        } else{
            res.send(item);
        }
    }catch(error){
        next(error)
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

//UPDATE items
router.put('/:id', async (req,res, next)=> {
  let id = req.params.id
  let item = await Item.findByPk(id)
  const {name, description, price, category, image_url} = req.body
  try{
   if(item){
    item.name = name
    item.description = description
    item.price = price
    item.category = category
    item.image_url = image_url
    await item.save()
    res.json(item)
   }
  }catch (error) {
    next(error)
  }
})
module.exports = router;
