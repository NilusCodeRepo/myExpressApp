const express = require('express');
const studentController = require('../controllers/student.controller.js');
const {checkJWT,checkUser} = require('../middlewares/checkUser.js')
const router = express.Router();

router.get('/all',checkUser,checkJWT,studentController.getStudent)

module.exports =  router;