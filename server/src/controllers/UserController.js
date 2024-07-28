const { createUser } = require("../models/User");
const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const createUserController = async (req, res) => {
  try {
    const { nombre, apellido, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = await createUser(nombre, apellido, email, hashedPassword);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUserController };
