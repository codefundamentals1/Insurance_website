const express = require('express');
const agent = require('../controllers/Agentlayout.controller.js')
const router = express.Router();

router.get('' , agent.temp)
router.get('/customer', agent.customer)


module.exports = router;