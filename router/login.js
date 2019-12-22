const express = require('express');
const router = express.Router()
const controller = require('../controller/login.controller')
const middleware = require('../middelware/login.middleware')

router.get('/', controller.login)
router.post('/', middleware.login,controller.index)

module.exports = router