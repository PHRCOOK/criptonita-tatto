const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  createFile,
  getAllFiles,
  getFileById,
  updateFile,
  deleteFile,
} = require("../../controllers/file-controllers/index.js");

const router = express.Router();

// Configuración de Multer para almacenamiento de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Ruta para subir un archivo
router.post("/upload", upload.single("file"), createFile);

// Ruta para obtener todos los archivos
router.get("/files", getAllFiles);

// Ruta para obtener un archivo por ID
router.get("/files/:id", getFileById);

// Ruta para actualizar un archivo por ID
router.put("/files/:id", upload.single("file"), updateFile);

// Ruta para eliminar un archivo por ID
router.delete("/files/:id", deleteFile);

module.exports = router;
