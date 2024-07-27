const Membership = require("../../models/memberships/index.js"); // Ajusta la ruta según tu estructura de archivos

// Crear una nueva membresía
exports.createMembership = async (req, res) => {
  try {
    const { name, benefits } = req.body;
    const newMembership = await Membership.create({ name, benefits });
    res.status(201).json(newMembership);
  } catch (error) {
    console.error("Error creating membership:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the membership." });
  }
};

// Obtener todas las membresías
exports.getAllMemberships = async (req, res) => {
  try {
    const memberships = await Membership.findAll();
    res.status(200).json(memberships);
  } catch (error) {
    console.error("Error retrieving memberships:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving memberships." });
  }
};

// Obtener una membresía por ID
exports.getMembershipById = async (req, res) => {
  try {
    const { id } = req.params;
    const membership = await Membership.findByPk(id);
    if (membership) {
      res.status(200).json(membership);
    } else {
      res.status(404).json({ error: "Membership not found." });
    }
  } catch (error) {
    console.error("Error retrieving membership:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the membership." });
  }
};

// Actualizar una membresía por ID
exports.updateMembership = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, benefits } = req.body;
    const [updated] = await Membership.update(
      { name, benefits },
      {
        where: { id },
      }
    );
    if (updated) {
      const updatedMembership = await Membership.findByPk(id);
      res.status(200).json(updatedMembership);
    } else {
      res.status(404).json({ error: "Membership not found." });
    }
  } catch (error) {
    console.error("Error updating membership:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the membership." });
  }
};

// Eliminar una membresía por ID
exports.deleteMembership = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Membership.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Membership not found." });
    }
  } catch (error) {
    console.error("Error deleting membership:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the membership." });
  }
};
