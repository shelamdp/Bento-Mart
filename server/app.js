if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const cors = require("cors")
const route  = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(route)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`I Love You ${PORT}`)
})