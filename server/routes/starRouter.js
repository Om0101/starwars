const express = require("express");
const router= express.Router()
const characterController = require('../controller/starController')

router.get('/people',characterController.getAllCharecters)


exports.router=router