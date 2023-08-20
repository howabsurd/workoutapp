const express = require("express");
const workoutRoutes = require("./routes/workout.js");
const dotenv = require("dotenv");
dotenv.config();

//middleware
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}!!!`);
});
