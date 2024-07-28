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

module.exports = { createUser };
