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
