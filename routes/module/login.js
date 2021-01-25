const express = require('express')
const router = express.Router()
const users = require('../../users.json')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const email = req.body.Email
  const password = req.body.Password
  const user = users.results.find(user => user.email === email && user.password === password)
  user === undefined ? res.render('error') : res.render('admin', { user })
})

module.exports = router
