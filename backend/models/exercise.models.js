const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    caloriesBurned:{type: Number},
  },
  {
    timestamps: true,
  }
);

Exercise.prototype.calculateCaloriesBurned = function() {
  const calorieBurnRates = {
    running: 10,
    cycling: 8,
    swimming: 12,
  };

  const caloriesBurned = calorieBurnRates[this.type] * this.duration;

  this.caloriesBurned = caloriesBurned;

  return caloriesBurned;
};

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
