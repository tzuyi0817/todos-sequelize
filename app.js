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
//首頁
app.get('/', (req, res) => {
  res.send('hello')
})

//登入頁面
app.get('/users/login', (req, res) => {
  res.render('login')
})

//登入撿查
app.post('/users/login', (req, res) => {
  res.send('login')
})

//註冊頁面
app.get('/users/register', (req, res) => {
  res.render('register')
})

//註冊撿查
app.post('/users/register', (req, res) => {
  res.send('register')
})

//登出
app.get('/users/logout', (req, res) => {
  res.send('logout')
})



// setting express 3000
app.listen(3000, () => {
  console.log('express is running on http://localhost:3000')
})
