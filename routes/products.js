const express = require('express');
const router = express.Router();
const path = require("path");

const productsController = require("../Controllers/productsController");

/* GET home page. */
router.get('/', productsController.productos);

module.exports = router;
