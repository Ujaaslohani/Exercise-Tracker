const router = require("express").Router();
let exercise = require("../models/exercise.models");

router.route("/").get((req, res) => {
  exercise
    .find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const newexercise = new exercise({
    username,
    description,
    duration,
    date,
  });

  newexercise
    .save()
    .then(() => {
      exercise.calculateCaloriesBurned();
      res.json("Exercise added!")
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req,res)=>{
    exercise.findById(req.params.id)
    .then(exercise=>res.json(exercise))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res)=>{
    exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Exercise Deleted'))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res)=>{
    exercise.findById(req.params.id)
    .then(exercise=>{
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(()=>res.json('Exercise updated!'))
        .catch(err=>res.status(400).json('Error: '+err));
    })
    .catch(err=>res.status(400).json('Error: '+err));
});


module.exports = router;
