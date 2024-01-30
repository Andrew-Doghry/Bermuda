const { getHomeInfo } = require('../controler/homeControler')
const router = require('express').Router()


router.route('/').get(getHomeInfo)
module.exports = router



