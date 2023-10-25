const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log(req.method)
  res.status(200).send('Hello World!')
})

module.exports = app
