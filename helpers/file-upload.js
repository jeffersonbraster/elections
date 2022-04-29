const multer = require('multer')
const path = require('path')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `csv_files`)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + String(Math.floor(Math.random() * 100)) + path.extname(file.originalname))
    }
})

const fileUpload = multer({
    storage: fileStorage,
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(csv)$/)) {
            return cb(new Error('Por favor, envie apenas csv!'))
        }
        cb(undefined, true)
    }
})

module.exports = { fileUpload }