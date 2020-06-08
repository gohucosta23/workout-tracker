const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema ({

    day: {
        type: Date,
        default: Date.now
    },

    exercises : [{
        name : {
            type : String,
            required : true
        },
        type : {
            type : String,
            required : true
    },

    weight : Number,
       
    sets : Number,
       
    reps :  Number,

    duration : {
        type : Number,
        required : true
    },

    distance : Number
    }],

    totalDuration : Number

});

WorkoutSchema.methods.getTotalDuration = function(data) {
    
        let durationArr = data[data.length - 1].exercises.map(exercise => exercise.duration);
        return this.totalDuration = durationArr.reduce(function(a, b) {
            return a + b;
        }, 0);
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
