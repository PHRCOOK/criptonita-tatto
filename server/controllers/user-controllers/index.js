const User = require("../../models/user/index.js"); // Ajusta la ruta según tu estructura de archivos

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Validar entrada (por ejemplo, verificar que el usuario ya existe)
    if (!username || !password || !role) {
      return res
        .status(400)
        .json({ error: "Username, password, and role are required." });
    }

    // Crear nuevo usuario
    const newUser = await User.create({ username, password, role });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user." });
  }
};

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving users." });
  }
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found." });
    }
  } catch (error) {
    console.error("Error retrieving user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the user." });
  }
};

// Actualizar un usuario por ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, role } = req.body;

    // Validar entrada
    if (!username && !password && !role) {
      return res.status(400).json({
        error:
          "At least one field (username, password, or role) must be provided.",
      });
    }

    // Actualizar usuario
    const [updated] = await User.update(
      { username, password, role },
      {
        where: { id },
      }
    );

    if (updated) {
      const updatedUser = await User.findByPk(id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: "User not found." });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the user." });
  }
};

// Eliminar un usuario por ID
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({
      where: { id },
    });

    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "User not found." });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user." });
  }
};
