const express = require('express')
const router = express.Router()

const login = require('./module/login')

router.use('/', login)

module.exports = router
