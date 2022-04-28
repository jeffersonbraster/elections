const express = require('express')
const router = express.Router()
const PoliticiansController = require('../controllers/PoliticiansController')

router.get('/', PoliticiansController.showPoliticians)
router.get('/sync', PoliticiansController.showSyncPoliticians)

module.exports = router
