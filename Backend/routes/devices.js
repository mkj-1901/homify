const express = require('express');
const router = express.Router();
const { toggleDevice } = require('../controllers/deviceController');

router.post('/toggle', toggleDevice);

module.exports = router;
