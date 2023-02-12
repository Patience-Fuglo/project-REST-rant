require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.send('HOME')
})

app.get('*', (req, res) => {
  res.send('404 page')
})

const PORT =  process.env.PORT || 3000

app.listen(PORT, console.log(`Listening on port ${PORT}`))


