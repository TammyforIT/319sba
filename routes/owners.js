import express from "express";
import Owner from "../models/Owner.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await Owner.find());
});

router.post("/", async (req, res) => {
  res.json(await Owner.create(req.body));
});

router.patch("/:id", async (req, res) => {
  res.json(await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", async (req, res) => {
  await Owner.findByIdAndDelete(req.params.id);
  res.json({ message: "Owner deleted" });
});

export default router;
