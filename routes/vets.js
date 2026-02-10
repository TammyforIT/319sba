import express from "express";
import Vet from "../models/Vet.js";

const router = express.Router();

// GET all vets
router.get("/", async (req, res, next) => {
  try {
    const vets = await Vet.find();
    res.json(vets);
  } catch (err) {
    next(err);
  }
});

// GET one vet
router.get("/:id", async (req, res, next) => {
  try {
    const vet = await Vet.findById(req.params.id);
    if (!vet) return res.status(404).json({ error: "Vet not found" });
    res.json(vet);
  } catch (err) {
    next(err);
  }
});

// CREATE vet
router.post("/", async (req, res, next) => {
  try {
    const newVet = await Vet.create(req.body);
    res.status(201).json(newVet);
  } catch (err) {
    next(err);
  }
});

// UPDATE vet
router.patch("/:id", async (req, res, next) => {
  try {
    const updated = await Vet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Vet not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// DELETE vet
router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await Vet.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Vet not found" });
    res.json({ message: "Vet deleted" });
  } catch (err) {
    next(err);
  }
});

export default router;
