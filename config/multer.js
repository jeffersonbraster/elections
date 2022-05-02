const multer = require('multer')
const {resolve} = require('path')

module.exports = {
  upload(folder) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", folder),
        filename: (req, file, cb) => {
          const fileName = `${Date.now()}${
            file.originalname
          }`;

          return cb(null, fileName);
        },
      }),
    };
  },
};