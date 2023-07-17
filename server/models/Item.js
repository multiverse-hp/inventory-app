const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')



const Item = sequelize.define("item", {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.FLOAT,
    category: Sequelize.STRING,
    image: Sequelize.TEXT,
  });
  module.exports = {
    db: sequelize,
    Item
  };