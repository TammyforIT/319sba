import express from "express";
import Cat from "../models/Cats.js";

const router = express.Router();

// GET all cats
router.get("/", async (req, res) => {
  try {
    const cats = await Cat.find()
      .populate("owner")
      .populate("vet");

    res.json(cats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const cat = await Cat.create(req.body);
    res.json(cat);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH update cat
router.patch("/:id", async (req, res) => {
  try {
    const updated = await Cat.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await Cat.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
