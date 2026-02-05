import express from "express";
import Cat from "../models/Cat.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await Cat.find().populate("owner vet"));
});

router.post("/", async (req, res) => {
  try {
    res.json(await Cat.create(req.body));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  res.json(await Cat.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", async (req, res) => {
  await Cat.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
