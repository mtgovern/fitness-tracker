var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    // db.Author.findAll({
    //   include: [db.Post]
    // }).then(function(dbAuthor) {
    //   res.json(dbAuthor);
    // });
    console.log("We should see this if it works");
  });

  // app.get("/api/authors/:id", function(req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.Author.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Post]
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });

  app.post("/api/workout", function(req, res) {
    console.log(req);
    db.Workout.create(req)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

};
