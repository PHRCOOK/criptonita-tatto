const pool = require("../config/db");

const createVideo = async (descripcion, video) => {
  const query = {
    text: `INSERT INTO videos (descripcion, video) VALUES ($1, $2) RETURNING *`,
    values: [descripcion, video],
  };
  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const getAllVideos = async () => {
  try {
    const result = await pool.query(`SELECT * FROM videos`);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getVideoById = async (id) => {
  try {
    const result = await pool.query(`SELECT * FROM videos WHERE id = $1`, [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const deleteVideo = async (id) => {
  try {
    await pool.query(`DELETE FROM videos WHERE id = $1`, [id]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createVideo,
  getAllVideos,
  getVideoById,
  deleteVideo,
};
