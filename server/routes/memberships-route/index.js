const express = require("express");
const router = express.Router();
const {
  createMembership,
  getAllMemberships,
  getMembershipById,
  updateMembership,
  deleteMembership,
} = require("../../controllers/memberships-controllers/index.js"); // Ajusta la ruta según tu estructura de archivos

// Ruta para crear una nueva membresía
router.post("/memberships", createMembership);

// Ruta para obtener todas las membresías
router.get("/memberships", getAllMemberships);

// Ruta para obtener una membresía por ID
router.get("/memberships/:id", getMembershipById);

// Ruta para actualizar una membresía por ID
router.put("/memberships/:id", updateMembership);

// Ruta para eliminar una membresía por ID
router.delete("/memberships/:id", deleteMembership);

module.exports = router;
