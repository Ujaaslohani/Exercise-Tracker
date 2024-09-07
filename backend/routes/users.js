const router = require("express").Router();
let User = require("../models/user.models");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newuser = new User({ username,password });

  newuser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/login").post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json("Invalid username or password");
    }
    if (!user.comparePassword(password)) {
      return res.status(401).json("Invalid username or password");
    }
    res.json("Login successful!");
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

router.route("/register").post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  try {
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json("Username already exists");
    }

    const newUser = new User({ username, password, email });
    await newUser.save();
    res.json("User registered successfully!");
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

module.exports = router;
