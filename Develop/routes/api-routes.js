var db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({
    }).then(function (dbWorkout) {
      res.json(dbWorkout);
    });
    console.log("We should see this if it works");
  });

  app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({

    }).then(function (dbWorkout) {
      res.json(dbWorkout);
    });
    console.log("This api workouts route is working");
  });

  app.post("/api/workout", function (req, res) {
    db.Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout
      .findByIdAndUpdate(req.params.id,
        { $push: { exercises: req.body } },
        { new: true, runValidators: true }
      )
      .then(dbObject => {
        console.log(dbObject);
        res.json(dbObject);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
