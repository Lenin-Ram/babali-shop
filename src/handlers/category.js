const express = require('express');
const router = express.Router();
const { CategoryModel: Category } = require('../models/category');

// Create a new category
router.post('/', async (req, res) => {
  const {
    name,
    description,
    featured_image,
  } = req.body;

  // TODO: Validate fields

  const category = new Category({
    name,
    description,
    featured_image,
  });

  await category.save();
  return res.status(201).json();
});

module.exports = router;