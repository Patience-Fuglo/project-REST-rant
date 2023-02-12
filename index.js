const express = require('express')
const app = express()

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('*', (req, res) => {
  res.status(404).send('<h1>404 Page</h1>')
})

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log(`Server started on port ${PORT}`))
