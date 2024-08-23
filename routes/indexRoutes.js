const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

// Get Home page
router.get('/', indexController.getHomePage);

module.exports = router;