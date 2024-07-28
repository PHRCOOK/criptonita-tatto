// src/index.js
require("dotenv").config(); // Carga las variables de entorno desde el archivo .env

const express = require("express");
const app = express();
const userRoute = require("./routes/UserRoute.js");
const membershipRoute = require("./routes/MembershipRoute.js");
const imageRoute = require("./routes/ImageRoute.js");
const videoRoute = require("./routes/VideoRoute.js");
const createTableIfNotExists = require("./scripts/initDatabase");

app.use(express.json());
app.use("/api", userRoute);
app.use("/api", membershipRoute);
app.use("/api", imageRoute);
app.use("/api", videoRoute);

// Llamada a la función para crear la tabla si no existe
createTableIfNotExists().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
