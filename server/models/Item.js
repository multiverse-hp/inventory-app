const {Sequelize} = require('sequelize');

const {sequelize} = require('../db');


const Item = sequelize.define("items", {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.FLOAT,
    category: Sequelize.STRING,
    image_url: Sequelize.TEXT,
  });
  
  module.exports = {
    db: sequelize,
    Item,
  };
  