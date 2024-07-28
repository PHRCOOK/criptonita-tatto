const pool = require("../config/db");

const createImage = async (descripcion, imagen) => {
  const query = {
    text: `INSERT INTO images (descripcion, imagen) VALUES ($1, $2) RETURNING *`,
    values: [descripcion, imagen],
  };
  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const getAllImages = async () => {
  try {
    const result = await pool.query(`SELECT * FROM images`);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getImageById = async (id) => {
  try {
    const result = await pool.query(`SELECT * FROM images WHERE id = $1`, [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const deleteImage = async (id) => {
  try {
    await pool.query(`DELETE FROM images WHERE id = $1`, [id]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createImage,
  getAllImages,
  getImageById,
  deleteImage,
};
