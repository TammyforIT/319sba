import express from "express";
import Vet from "../models/Vet.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const vets = await Vet.find();
    res.json(vets);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newVet = await Vet.create(req.body);
    res.json(newVet);
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const updated = await Vet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Vet.findByIdAndDelete(req.params.id);
    res.json({ message: "Vet deleted" });
  } catch (err) {
    next(err);
  }
});

export default router;
