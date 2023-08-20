const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "Get all Workout" });
});

router.get(":/id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

router.post("/", (req, res) => {
  res.json({ mssg: "POST a new Workout" });
});

router.delete("/", (req, res) => {
  res.json({ mssg: "DELETE a  Workout" });
});

module.exports = router;
