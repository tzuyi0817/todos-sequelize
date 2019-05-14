const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


//setting route
app.get('/', (req, res) => {
  res.send('hello')
})


// setting express 3000
app.listen(3000, () => {
  console.log('express is running on http://localhost:3000')
})
