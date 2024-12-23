import React, { useEffect, useState } from 'react';
import { getExercises, deleteExercise } from '../api/api';

const ExerciseList = ({ userId }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const { data } = await getExercises(userId);
      setExercises(data);
    };
    fetchExercises();
  }, [userId]);

  const handleDelete = async (exerciseId) => {
    await deleteExercise(userId, exerciseId);
    setExercises(exercises.filter((ex) => ex._id !== exerciseId));
  };

  return (
    <div>
      <h2>Your Exercises</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise._id}>
            {exercise.name} - {exercise.calories} calories
            <button onClick={() => handleDelete(exercise._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
