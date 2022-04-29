require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// routes
const politiciansRoutes = require('./routes/politiciansRoutes')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.use('/politicians', politiciansRoutes)

app.get("/", (req, res) => {
  res.render('root')
})

// conn
//   .sync()
//   .then(() => {
    app.listen(3000)
  // })
  // .catch((err) => console.log(err))
