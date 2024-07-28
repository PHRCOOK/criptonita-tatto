const {
  createImage,
  getAllImages,
  getImageById,
  deleteImage,
} = require("../models/Image");

const createImageController = async (req, res) => {
  try {
    const { descripcion, imagen } = req.body;
    const image = await createImage(descripcion, imagen);
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllImagesController = async (req, res) => {
  try {
    const images = await getAllImages();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getImageByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await getImageById(id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.status(200).json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteImageController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteImage(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createImageController,
  getAllImagesController,
  getImageByIdController,
  deleteImageController,
};
