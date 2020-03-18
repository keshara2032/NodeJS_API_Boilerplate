'use strict'
const express = require('express')
const router = express.Router()
const authRouter = require('./auth.route')


router.use('/auth', authRouter) // mount auth paths

module.exports = router
