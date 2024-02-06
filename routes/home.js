const { createNewUser } = require('../controler/registerControler')
const router = require('express').Router()


router.route('/').get(createNewUser)
module.exports = router



