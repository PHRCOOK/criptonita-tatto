// controllers/MembershipController.js
const {
  createMembership,
  getAllMemberships,
  getMembershipById,
  updateMembership,
  deleteMembership,
} = require("../models/Membership");

const createMembershipController = async (req, res) => {
  try {
    const { nombre, precio, descripcion, imagen } = req.body;
    const membership = await createMembership(
      nombre,
      precio,
      descripcion,
      imagen
    );
    res.status(201).json(membership);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllMembershipsController = async (req, res) => {
  try {
    const memberships = await getAllMemberships();
    res.status(200).json(memberships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMembershipByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const membership = await getMembershipById(id);
    if (!membership) {
      return res.status(404).json({ message: "Membership not found" });
    }
    res.status(200).json(membership);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMembershipController = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, descripcion, imagen } = req.body;
    const updatedMembership = await updateMembership(
      id,
      nombre,
      precio,
      descripcion,
      imagen
    );
    if (!updatedMembership) {
      return res.status(404).json({ message: "Membership not found" });
    }
    res.status(200).json(updatedMembership);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMembershipController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteMembership(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMembershipController,
  getAllMembershipsController,
  getMembershipByIdController,
  updateMembershipController,
  deleteMembershipController,
};
