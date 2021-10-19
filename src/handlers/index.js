const express = require('express');
const router = express.Router();

// Define modules/handlers of API
router.use('/category', require('./category'));

module.exports = router;