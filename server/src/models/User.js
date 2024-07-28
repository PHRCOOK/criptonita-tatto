// models/User.js
const pool = require("../config/db");

const createUser = async (nombre, apellido, email, password) => {
  const query = {
    text: `INSERT INTO usuarios (nombre, apellido, email, password) VALUES ($1, $2, $3, $4) RETURNING *`,
    values: [nombre, apellido, email, password],
  };
  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const result = await pool.query(`SELECT * FROM usuarios`);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const result = await pool.query(`SELECT * FROM usuarios WHERE id = $1`, [
      id,
    ]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, nombre, apellido, email, password) => {
  const query = {
    text: `UPDATE usuarios SET nombre = $1, apellido = $2, email = $3, password = $4 WHERE id = $5 RETURNING *`,
    values: [nombre, apellido, email, password, id],
  };
  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    await pool.query(`DELETE FROM usuarios WHERE id = $1`, [id]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
