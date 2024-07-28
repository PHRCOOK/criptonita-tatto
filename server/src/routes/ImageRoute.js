const express = require("express");
const router = express.Router();
const {
  createImageController,
  getAllImagesController,
  getImageByIdController,
  deleteImageController,
} = require("../controllers/ImageController");

router.post("/images", createImageController);
router.get("/images", getAllImagesController);
router.get("/images/:id", getImageByIdController);
router.delete("/images/:id", deleteImageController);

module.exports = router;
