const express = require('express')
const app = express()

const post = 3000

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(post, console.log(`The serve is running on localhost:${post}`))
