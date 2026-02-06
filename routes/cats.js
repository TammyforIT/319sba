import express from "express";
import Cat from "../models/Cat.js";

const router = express.Router();

/**
 * GET /cats
 * Pagination + Sorting + Filtering
 * 
 * Query params:
 * - page 
 * - limit 
 * - sort 
 * - breed 
 */
router.get("/", async (req, res, next) => {
  try {
    const {
      breed,
      page = 1,
      limit = 10,
      sort = "name"
    } = req.query;

    const filter = breed ? { breed } : {};

    const cats = await Cat.find(filter)
      .populate("owner vet")
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Cat.countDocuments(filter);

    res.json({
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / limit),
      data: cats
    });
  } catch (err) {
    next(err);
  }
});

/**
 * GET /cats/:id
 */
router.get("/:id", async (req, res, next) => {
  try {
    const cat = await Cat.findById(req.params.id).populate("owner vet");
    res.json(cat);
  } catch (err) {
    next(err);
  }
});

/**
 * POST /cats
 */
router.post("/", async (req, res, next) => {
  try {
    const newCat = await Cat.create(req.body);
    res.json(newCat);
  } catch (err) {
    next(err);
  }
});

/**
 * PATCH /cats/:id
 */
router.patch("/:id", async (req, res, next) => {
  try {
    const updated = await Cat.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /cats/:id
 */
router.delete("/:id", async (req, res, next) => {
  try {
    await Cat.findByIdAndDelete(req.params.id);
    res.json({ message: "Cat deleted" });
  } catch (err) {
    next(err);
  }
});

export default router;
