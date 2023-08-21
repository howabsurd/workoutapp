const express = require("express");
const workoutRoutes = require("./routes/workout.js");
const mongoose = require("mongoose");
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

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log(`Connected to database`);
  })
  .catch((error) => {
    console.error(`Not able to connect to Database`);
  });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}!!!`);
});
