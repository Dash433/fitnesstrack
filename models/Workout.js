// Importing Modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: { 
        type: Date, 
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter an exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter an exercise name"
            },
            distance: {
                type: Number
            },
            weight: { 
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number
            }
        }
    ]
});
// Export for use in index model
const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;