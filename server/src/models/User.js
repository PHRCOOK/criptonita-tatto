const pool = require("../config/db");

const createUser = async (nombre, apellido, email, password, membership_id) => {
  const query = {
    text: "INSERT INTO users (nombre, apellido, email, password, membership_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    values: [nombre, apellido, email, password, membership_id],
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
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, nombre, apellido, email, password) => {
  const query = {
    text: "UPDATE users SET nombre = $1, apellido = $2, email = $3, password = $4 WHERE id = $5 RETURNING *",
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
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
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
