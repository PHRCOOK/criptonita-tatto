const Membership = require("../models/membership");

const createMembership = async (req, res) => {
  try {
    const { name, benefits } = req.body;
    const membership = await Membership.create({ name, benefits });
    res.status(201).json(membership);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createMembership };
