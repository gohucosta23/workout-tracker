const db = require("../models");

module.exports = function(app){

app.get("/api/workouts", (req, res) => {

    const workout = new db.Workout(req.body);
    
    db.Workout.find({})
    .then(dbWorkout => {
        for(var i = 0; i < dbWorkout.length; i++){
            Object.assign(dbWorkout[i], { totalDuration : workout.getTotalDuration(dbWorkout)});
        }
        return res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
      });
});

app.put("/api/workouts/:id", (req, res) => {
    const workout = new db.Workout(req.body);

    db.Workout.update({ _id : req.params.id }, { $push: { exercises : req.body } }, 
    (err, data)=> {
        if (err) {
            res.send(err);
          } else {
            console.log(data);
            res.send(data);
          }
        
    });
}); 

app.post("/api/workouts", (req, res) => {
    
    db.Workout.create(req.body).then(dbWorkout => {
        
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
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
