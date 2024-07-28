// src/scripts/initDatabase.js
require("dotenv").config(); // Carga las variables de entorno desde el archivo .env

const { Client } = require("pg");

async function createTableIfNotExists() {
  const client = new Client({
    user: process.env.DB_USER, // Usa las variables de entorno
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  try {
    await client.connect();
    console.log("Conexión a la base de datos exitosa.");

    await client.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(255),
        apellido VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255)
      );
    `);

    console.log("Tabla creada o ya existe.");
  } catch (error) {
    console.error(
      "Error al conectar con la base de datos o crear la tabla:",
      error
    );
  } finally {
    await client.end();
  }
}

module.exports = createTableIfNotExists;
