import express, { json, urlencoded } from "express";
import routes from "./routes";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

// Set up routes
app.use("/", routes);

// Handle 404 errors for undefined routes
app.use((req, res, next) => {
  res.status(404).send(`Route not found!`);
});

// Handle method not allowed errors for unsupported methods
app.use((req, res, next) => {
  if (req.method === "GET" || req.method === "PUT" || req.method === "DELETE") {
    res.status(405).send(`Method not allowed!`);
  } else {
    next();
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
