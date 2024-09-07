const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    type: { type: String, required: true }, // You were missing this field
    caloriesBurned: { type: Number },
  },
  {
    timestamps: true,
  }
);

exerciseSchema.methods.calculateCaloriesBurned = function() {
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