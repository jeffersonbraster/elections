const express = require('express')
const router = express.Router()
const { fileUpload } = require('../helpers/file-upload')
const PoliticiansController = require('../controllers/PoliticiansController')

router.get('/sync', PoliticiansController.showSyncPoliticians)
router.post('/list-politicos', fileUpload.array('files'), PoliticiansController.save)

module.exports = router
