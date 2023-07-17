const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /items
router.get("/items", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});


//GET /items/ :itemId
router.get("/items/:id", async (req, res, next) =>{
    try{
        console.log('item id', req.params.id )
        let item  =await Item.findByPk(req.params.id, {
            include:[{ model: Item }]
        });

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

module.exports = router;
