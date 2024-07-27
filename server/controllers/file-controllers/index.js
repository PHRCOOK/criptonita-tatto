const File = require("../../models/file/index.js"); // Ajusta la ruta según tu estructura de archivos

// Crear un nuevo archivo
exports.createFile = async (req, res) => {
  try {
    const { filename, filepath, mimetype } = req.body;
    const newFile = await File.create({ filename, filepath, mimetype });
    res.status(201).json(newFile);
  } catch (error) {
    console.error("Error creating file:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the file." });
  }
};

// Obtener todos los archivos
exports.getAllFiles = async (req, res) => {
  try {
    const files = await File.findAll();
    res.status(200).json(files);
  } catch (error) {
    console.error("Error retrieving files:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving files." });
  }
};

// Obtener un archivo por ID
exports.getFileById = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await File.findByPk(id);
    if (file) {
      res.status(200).json(file);
    } else {
      res.status(404).json({ error: "File not found." });
    }
  } catch (error) {
    console.error("Error retrieving file:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the file." });
  }
};

// Actualizar un archivo por ID
exports.updateFile = async (req, res) => {
  try {
    const { id } = req.params;
    const { filename, filepath, mimetype } = req.body;
    const [updated] = await File.update(
      { filename, filepath, mimetype },
      {
        where: { id },
      }
    );
    if (updated) {
      const updatedFile = await File.findByPk(id);
      res.status(200).json(updatedFile);
    } else {
      res.status(404).json({ error: "File not found." });
    }
  } catch (error) {
    console.error("Error updating file:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the file." });
  }
};

// Eliminar un archivo por ID
exports.deleteFile = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await File.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "File not found." });
    }
  } catch (error) {
    console.error("Error deleting file:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the file." });
  }
};
