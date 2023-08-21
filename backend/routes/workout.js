const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require("../controllers/workoutController.js");

const router = express.Router();

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a  Workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a Workout" });
});

module.exports = router;
