// 模組
const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const router = require('./routes/index')

// 一般設定
const app = express()
const port = process.env.port || 3000

// 靜態引擎
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

// 中介軟體
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

app.listen(port, console.log(`The serve is running on localhost:${port}`))
