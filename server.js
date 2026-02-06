import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/conn.js";

// import both middlewares from ONE file
import { logger, errorHandler } from "./middleware.js";

import catRoutes from "./routes/cats.js";
import ownerRoutes from "./routes/owners.js";
import vetRoutes from "./routes/vets.js";

dotenv.config();
const app = express();

app.use(express.json());

// global logger
app.use(logger);

// connect to MongoDB
connectDB();

// routes
app.use("/cats", catRoutes);
app.use("/owners", ownerRoutes);
app.use("/vets", vetRoutes);

// global error handler (must be last) or it doesnt find routes to even connect to.
app.use(errorHandler);

app.listen(3000, () => console.log("Server running on port 3000"));
