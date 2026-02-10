import express from "express";
import Owner from "../models/Owner.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const owners = await Owner.find();
    res.json(owners);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newOwner = await Owner.create(req.body);
    res.json(newOwner);
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const updated = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Owner.findByIdAndDelete(req.params.id);
    res.json({ message: "Owner deleted" });
  } catch (err) {
    next(err);
  }
});

export default router;

