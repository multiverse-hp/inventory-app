const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')



const Item = sequelize.define("items", {
    title: Sequelize.STRING,
    price: Sequelize.FLOAT,
    description: Sequelize.STRING,
    category: Sequelize.STRING,
    image: Sequelize.TEXT,
  });
  module.exports = {
    db: sequelize,
    Item
  };