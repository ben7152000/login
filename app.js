// 模組
const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const app = express()
const port = process.env.port || 3000

const login = function (req, res, next) {
  console.log('ok')
  next()
}

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', login, (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  res.redirect('/admin')
})

app.get('/admin', (req, res) => {
  res.send('hello')
})

app.listen(port, console.log(`The serve is running on localhost:${port}`))
