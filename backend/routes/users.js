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

router.route("/login").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.status(400).json("Error: " + err);
    }
    if (!user) {
      return res.status(401).json("Invalid username or password");
    }
    if (!user.comparePassword(password)) {
      return res.status(401).json("Invalid username or password");
    }
    res.json("Login successful!");
  });
});

router.route("/register").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.status(400).json("Error: " + err);
    }
    if (user) {
      return res.status(400).json("Username already exists");
    }

    const newUser = new User({ username, password });

    newUser
      .save()
      .then(() => res.json("User registered successfully!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
