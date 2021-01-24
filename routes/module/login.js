const express = require('express')
const router = express.Router()

const login = function (req, res, next) {
  console.log('ok')
  next()
}

router.get('/', login, (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  res.redirect('/admin')
})

module.exports = router
