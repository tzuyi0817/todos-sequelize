const express = require('express')
const router = express.Router()
const passport = require('passport')
const db = require('../models')
const User = db.User

//登入頁面
router.get('/login', (req, res) => {
  res.render('login')
})

//登入撿查
router.post('/login', (req, res) => {
  res.send('login')
})

//註冊頁面
router.get('/register', (req, res) => {
  res.render('register')
})

//註冊撿查
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body
  User.findOne({ where: { email: email } }).then(user => {
    if (user) {
      console.log('User already exist')
      res.render('register', { name, email, password, password2 })
    } else {
      const newUser = new User({ name, email, password })
      newUser.save().then(user => {
        res.redirect('/')
      })
        .catch(err => console.log(err))
    }
  })
})

//登出
router.get('/logout', (req, res) => {
  res.send('logout')
})

module.exports = router