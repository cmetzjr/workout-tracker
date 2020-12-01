// const { Workout } = require("../models");
var db = require("../models");
// const path = require("path");

module.exports = function (app) {

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
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //post new workout (create)
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({}).then(data => {
                console.log("data", data);
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    })


    // put a workout (update)
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOneAndUpdate({
                _id: req.params.id
            }, {
                $push: {
                    exercises: req.body
                }
            }, )
            .then(data => {
                console.log("data", data)
                res.json(data)
            })
            .catch(err => {
                res.json(err);
            });
    });




}