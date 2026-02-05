import mongoose from "mongoose";

const vetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  clinic: { type: String, required: true }
});

export default mongoose.model("Vet", vetSchema);
