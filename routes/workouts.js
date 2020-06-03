const db = require("../models");

module.exports = function(app){

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
      });
});

app.put("/api/workouts/:id", (req, res) => {
    db.Workout.update({ _id : req.params.id }, { $push: { exercises : req.body } }, 
    (err, data)=> {
        if (err) {
            res.send(err);
          } else {
            res.send(data);
          }
    });
});

app.post("/api/workouts", ({ body }, res) => {
    console.log(body);
    db.Workout.create({ body }, (err, data) => {
        if(err) {
            res.send(err);
        }
        else {
            res.send(data);
        }
    });
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
      });
});
}
