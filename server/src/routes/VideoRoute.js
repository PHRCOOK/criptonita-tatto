const express = require("express");
const router = express.Router();
const {
  createVideoController,
  getAllVideosController,
  getVideoByIdController,
  deleteVideoController,
} = require("../controllers/VideoController");

router.post("/videos", createVideoController);
router.get("/videos", getAllVideosController);
router.get("/videos/:id", getVideoByIdController);
router.delete("/videos/:id", deleteVideoController);

module.exports = router;
