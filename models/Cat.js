import mongoose from "mongoose";

const catSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  age: { type: Number, min: 0, max: 30 },
  breed: { type: String, required: true, index: true },
  price: { type: Number, min: 0 },   // optional pricing field
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "Owner", required: true },
  vet: { type: mongoose.Schema.Types.ObjectId, ref: "Vet" }
});

catSchema.path("breed").validate(v => v.length >= 3, "Breed name too short");

export default mongoose.model("Cat", catSchema);
