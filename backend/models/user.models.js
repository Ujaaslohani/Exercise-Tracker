const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    email: { type: String, required: true, unique: true }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
User.prototype.comparePassword = function(password) {
  return this.password === password;
};

module.exports = User;
