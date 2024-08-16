const express = require("express");
const routes = require("./app/routes.js");

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Adjust this to your React app's origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Allow preflight requests
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use("/", routes);

// Handle 404 errors for undefined routes
app.use((req, res, next) => {
  res.status(404).send("Route not found!");
});

// Handle method not allowed errors for unsupported methods
app.use((req, res, next) => {
  if (["GET", "PUT", "DELETE"].includes(req.method)) {
    res.status(405).send("Method not allowed!");
  } else {
    next();
  }
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
