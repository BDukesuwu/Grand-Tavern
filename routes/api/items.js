const express = require('express');
const router = express.Router();
const itemCtrl = require('../../controllers/api/items');

//get /api/items
router.get('/', itemCtrl.index);