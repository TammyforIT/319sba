import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/conn.js";

import { logger, errorHandler } from "./middleware.js";

import catRoutes from "./routes/cats.js";
import ownerRoutes from "./routes/owners.js";
import vetRoutes from "./routes/vets.js";

dotenv.config(); // loads .env FIRST

const app = express();

app.use(express.json());
app.use(logger);

// connect to MongoDB
connectDB();

app.use("/cats", catRoutes);
app.use("/owners", ownerRoutes);
app.use("/vets", vetRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
