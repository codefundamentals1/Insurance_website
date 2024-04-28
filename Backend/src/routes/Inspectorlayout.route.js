const express = require('express');
const inspector = require('../controllers/Inspectorlayout.controller.js')

const router = express.Router();

router.get('' , inspector.insuracepolicypage1)



module.exports = router;