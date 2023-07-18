const express = require("express");
const router = express.Router();

// different model routers
router.use('/sauces', require('./sauces'));
router.use('/items', require('./items'));
// router.use('/items/:id', require('./items/:id'));

module.exports = router;
