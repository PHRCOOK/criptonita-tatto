const express = require("express");
const sequelize = require("./config/db");
const fileRoutes = require("./routes/fileRoutes");
const userRoutes = require("./routes/userRoutes");
const membershipRoutes = require("./routes/membershipRoutes");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Rutas
app.use("/api", fileRoutes);
app.use("/api", userRoutes);
app.use("/api", membershipRoutes);

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Sincroniza con la base de datos
sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});
