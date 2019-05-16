const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')

const db = require('./models')
const Todo = db.Todo
const User = db.User


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(session({
  secret: 'your secret key',
  resave: 'false',
  saveUninitialized: 'false'
}))

app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)
app.use((req, res, next) => {
  res.locals.user = req.user
  next()
})

//setting route
//首頁
app.get('/', (req, res) => {
  res.send('hello')
})

app.use('/users', require('./routes/user'))





// setting express 3000
app.listen(3000, () => {
  db.sequelize.sync()
  console.log('express is running on http://localhost:3000')
})
