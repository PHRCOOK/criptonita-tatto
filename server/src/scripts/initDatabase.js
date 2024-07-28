// src/scripts/initDatabase.js
require("dotenv").config(); // Load environment variables from .env file

const { Client } = require("pg");

async function createTableIfNotExists() {
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  try {
    await client.connect();
    console.log("Connected to the database successfully.");

    // Create usuarios table
    await client.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(255),
        apellido VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255)
      );
    `);

    console.log("Usuarios table created or already exists.");

    // Create memberships table
    await client.query(`
      CREATE TABLE IF NOT EXISTS memberships (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(255),
        precio DECIMAL,
        descripcion TEXT,
        imagen VARCHAR(255)
      );
    `);

    console.log("Memberships table created or already exists.");
  } catch (error) {
    console.error(
      "Error connecting to the database or creating the tables:",
      error
    );
  } finally {
    await client.end();
  }
}

module.exports = createTableIfNotExists;
