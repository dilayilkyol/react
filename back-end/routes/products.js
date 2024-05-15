const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// Ürünleri getirme
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
    console.log("line 11")
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;