// src/index.js
require("dotenv").config(); // Carga las variables de entorno desde el archivo .env

const express = require("express");
const app = express();
const userRoute = require("./routes/UserRoute.js");
const createTableIfNotExists = require("./scripts/initDatabase");

app.use(express.json());
app.use("/api", userRoute);

// Llamada a la función para crear la tabla si no existe
createTableIfNotExists().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
