// const { Workout } = require("../models");
var db = require("../models");
const path = require ("path");

module.exports = function(app) {

    // get all workouts
    app.get("/all", (req, res) => {
        console.log("/all route works")
        db.Workout.find({})
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
      });
      
    // get /workouts endpoint  
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
      });

    //get workouts in range from api/workouts/range  
    

    //post new workout (create)
    

    // put a workout (update)





}