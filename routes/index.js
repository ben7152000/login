const express = require('express')
const router = express.Router()

const login = require('./module/login')
const admin = require('./module/admin')

router.use('/', login)
router.use('/admin', admin)

module.exports = router
