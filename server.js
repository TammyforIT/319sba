import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import catRoutes from "./routes/cats.js";
import ownerRoutes from "./routes/owners.js";
import vetRoutes from "./routes/vets.js";

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/cats", catRoutes);
app.use("/owners", ownerRoutes);
app.use("/vets", vetRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
