const express = require('express');
const router = express.Router();
const locations = require('../data/locations.json');

router.get('/', (req, res) => {
  res.json(locations);
});

module.exports = router;