import express from "express";
import Vet from "../models/Vet.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await Vet.find());
});

router.post("/", async (req, res) => {
  res.json(await Vet.create(req.body));
});

router.patch("/:id", async (req, res) => {
  res.json(await Vet.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", async (req, res) => {
  await Vet.findByIdAndDelete(req.params.id);
  res.json({ message: "Vet deleted" });
});

export default router;
