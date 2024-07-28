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
INSERT INTO usuarios (id, nombre, apellido, email, password)
VALUES (
    id:integer,
    'nombre:character varying',
    'apellido:character varying',
    'email:character varying',
    'password:character varying'
  );