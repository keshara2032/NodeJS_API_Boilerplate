'use strict'

const express = require('express')
const router = express.Router()
const authController = require('../../controllers/auth.controller')
const validator = require('express-validation')
const { create } = require('../../validations/user.validation')
const auth = require('../../middlewares/authorization')



// Authentication example
router.get('/secret1',  (req, res) => {
  // example route for auth
  // res.json({ message: 'Anyone can access(only authorized)' })
  setTimeout(function(){
    res.json({message: 'Your request timed out'})
  },5000);


})
router.get('/secret2', auth(['admin']), (req, res) => {
  // example route for auth
  res.json({ message: 'Only admin can access' })
})
router.get('/secret3', (req, res) => {
  // example route for auth
  res.json({ message: 'Only user can access' })
})


//API v1.0

// User level

router.post('/register', validator(create), authController.register) // validate and register
router.post('/login', authController.login) // login
router.get('/confirm', authController.confirm)
router.get('/user', auth(['user','admin']), authController.user)
router.delete('/delete', auth(['admin']), authController.delete)
router.post('/update', auth(['admin']), authController.update)



module.exports = router
