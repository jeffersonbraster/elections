require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
app.use(express.json())

const conn = require('./db/conn')

// Models
const Politicians = require('./models/Politicians')

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


conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))
