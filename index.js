import 'dotenv/config'
import express from 'express'
import exphbs from 'express-handlebars'

const app = express()
app.use(express.json())

// routes
import politiciansRoutes from '#routes/politiciansRoutes'

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
