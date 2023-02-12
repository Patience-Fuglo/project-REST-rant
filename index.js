const express = require('express')
const app = express()

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const PORT = process.env.PORT || 7000

app.listen(PORT, console.log(`Server started on port ${PORT}`))
