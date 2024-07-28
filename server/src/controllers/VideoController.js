const {
  createVideo,
  getAllVideos,
  getVideoById,
  deleteVideo,
} = require("../models/Video");

const createVideoController = async (req, res) => {
  try {
    const { descripcion, video } = req.body;
    const videoEntry = await createVideo(descripcion, video);
    res.status(201).json(videoEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllVideosController = async (req, res) => {
  try {
    const videos = await getAllVideos();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVideoByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await getVideoById(id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteVideoController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteVideo(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createVideoController,
  getAllVideosController,
  getVideoByIdController,
  deleteVideoController,
};
