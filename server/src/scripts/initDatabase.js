require("dotenv").config();
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

    // Create memberships table first
    await client.query(
      `CREATE TABLE IF NOT EXISTS memberships (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(255),
        precio DECIMAL,
        descripcion TEXT,
        imagen VARCHAR(255)
      );`
    );

    // Create users table after memberships
    await client.query(
      `CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(255),
        apellido VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255),
        membership_id INTEGER,
        FOREIGN KEY (membership_id) REFERENCES memberships (id)
      );`
    );

    // Create images table
    await client.query(
      `CREATE TABLE IF NOT EXISTS images (
        id SERIAL PRIMARY KEY,
        descripcion TEXT,
        imagen VARCHAR(255),
        membership_id INTEGER,
        FOREIGN KEY (membership_id) REFERENCES memberships (id)
      );`
    );

    // Create videos table
    await client.query(
      `CREATE TABLE IF NOT EXISTS videos (
        id SERIAL PRIMARY KEY,
        descripcion TEXT,
        video VARCHAR(255),
        membership_id INTEGER,
        FOREIGN KEY (membership_id) REFERENCES memberships (id)
      );`
    );
  } catch (error) {
    console.error("Error creating tables:", error);
  } finally {
    await client.end();
    console.log("Disconnected from the database.");
  }
}

module.exports = {
  createTableIfNotExists,
};
