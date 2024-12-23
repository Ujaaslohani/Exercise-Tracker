import React, { useState } from 'react';
import { addExercise } from '../api/api';

const ExerciseForm = ({ userId, onExerciseAdded }) => {
  const [exercise, setExercise] = useState({ name: '', calories: 0 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await addExercise(userId, exercise);
    onExerciseAdded(data);
    setExercise({ name: '', calories: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Exercise Name"
        value={exercise.name}
        onChange={(e) => setExercise({ ...exercise, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Calories Burned"
        value={exercise.calories}
        onChange={(e) => setExercise({ ...exercise, calories: +e.target.value })}
      />
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default ExerciseForm;
