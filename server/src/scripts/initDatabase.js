const pool = require("../config/db");

const createTableIfNotExists = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(255) NOT NULL,
      apellido VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabla "usuarios" creada o ya existe.');
  } catch (error) {
    console.error('Error al crear la tabla "usuarios":', error);
  }
};

module.exports = createTableIfNotExists;
