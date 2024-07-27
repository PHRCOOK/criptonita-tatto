const express = require("express");
const sequelize = require("./config-db/config-db.js");
const fileRoutes = require("./routes/file-route/index.js");
const userRoutes = require("./routes/user-route/index.js");
const membershipRoutes = require("./routes/memberships-route/index.js");

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
