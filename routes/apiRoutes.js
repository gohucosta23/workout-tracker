const db = require("../models");

module.exports = function(app){

app.get("/api/workouts", (req, res) => {

    const workout = new db.Workout(req.body);
    workout.getTotalDuration();
    
    db.Workout.find({})
    .then(dbWorkout => {
    
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
      });
});

app.put("/api/workouts/:id", (req, res) => {

    const workout = new db.Workout(req.body);
    workout.getTotalDuration();
    console.log("totalDuration", workout.getTotalDuration());
    db.Workout.update({ _id : req.params.id }, workout, { $push: { exercises : req.body } }, 
    (err, data)=> {
        if (err) {
            res.send(err);
          } else {
            res.send(data);
          }
        
    });
}); 

app.post("/api/workouts", ({ body }, res) => {
   
    const workout = new db.Workout(body);
    workout.getTotalDuration();

    db.Workout.create(workout, (err, data) => {
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
