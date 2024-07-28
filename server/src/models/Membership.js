const pool = require("../config/db");

const createMembership = async (nombre, precio, descripcion, imagen) => {
  const query = {
    text: "INSERT INTO memberships (nombre, precio, descripcion, imagen) VALUES ($1, $2, $3, $4) RETURNING *",
    values: [nombre, precio, descripcion, imagen],
  };
  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const getAllMemberships = async () => {
  try {
    const result = await pool.query("SELECT * FROM memberships");
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getMembershipById = async (id) => {
  try {
    const result = await pool.query("SELECT * FROM memberships WHERE id = $1", [
      id,
    ]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateMembership = async (id, nombre, precio, descripcion, imagen) => {
  const query = {
    text: "UPDATE memberships SET nombre = $1, precio = $2, descripcion = $3, imagen = $4 WHERE id = $5 RETURNING *",
    values: [nombre, precio, descripcion, imagen, id],
  };
  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const deleteMembership = async (id) => {
  try {
    await pool.query("DELETE FROM memberships WHERE id = $1", [id]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMembership,
  getAllMemberships,
  getMembershipById,
  updateMembership,
  deleteMembership,
};
