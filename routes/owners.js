import express from "express";
import Owner from "../models/Owner.js";

const router = express.Router();

// GET all owners
router.get("/", async (req, res, next) => {
  try {
    const owners = await Owner.find();
    res.json(owners);
  } catch (err) {
    next(err);
  }
});

// GET one owner
router.get("/:id", async (req, res, next) => {
  try {
    const owner = await Owner.findById(req.params.id);
    if (!owner) return res.status(404).json({ error: "Owner not found" });
    res.json(owner);
  } catch (err) {
    next(err);
  }
});

// CREATE owner
router.post("/", async (req, res, next) => {
  try {
    const newOwner = await Owner.create(req.body);
    res.status(201).json(newOwner);
  } catch (err) {
    next(err);
  }
});

// UPDATE owner
router.patch("/:id", async (req, res, next) => {
  try {
    const updated = await Owner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Owner not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// DELETE owner
router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await Owner.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Owner not found" });
    res.json({ message: "Owner deleted" });
  } catch (err) {
    next(err);
  }
});

export default router;
