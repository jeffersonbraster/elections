const express = require("express");
const router = express.Router();
const multer = require("multer");
const uploadConfig = require("../config/multer");
const PoliticiansController = require("../controllers/PoliticiansController");

const upload = multer(uploadConfig.upload("politicos"));

router.get("/", PoliticiansController.showPoliticians);
router.get("/sync", PoliticiansController.showSyncPoliticians);
router.post(
  "/list-politicos",
  upload.array("files"),
  PoliticiansController.save
);

module.exports = router;
