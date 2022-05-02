import express from "express";
import { fileUpload } from "#helpers/file-upload";
import PoliticiansController from "#controllers/PoliticiansController";
const router = express.Router();

router.get("/sync", PoliticiansController.showSyncPoliticians);
router.post(
  "/list-politicos",
  fileUpload.array("files"),
  PoliticiansController.save
);

export default router;
