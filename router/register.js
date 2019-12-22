const express = require('express');
const router = express.Router()
const db = require('../models/user.models')
const controller = require('../controller/register.controller')
const middelware = require('../middelware/register.middleware')

router.get('/', controller.register)
router.post('/',middelware.checkUser,controller.createUser)

module.exports = router