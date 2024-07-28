// routes/index.js
const express = require("express");
const router = express.Router();
const {
  createMembershipController,
  getAllMembershipsController,
  getMembershipByIdController,
  updateMembershipController,
  deleteMembershipController,
} = require("../controllers/MembreshipController");

router.post("/memberships", createMembershipController);
router.get("/memberships", getAllMembershipsController);
router.get("/memberships/:id", getMembershipByIdController);
router.put("/memberships/:id", updateMembershipController);
router.delete("/memberships/:id", deleteMembershipController);

module.exports = router;
