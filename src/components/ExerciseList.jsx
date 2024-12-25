import React, { useEffect, useState } from 'react';
import { getExercises, deleteExercise } from '../api/api';

const ExerciseList = ({ userId }) => {
  const [exercises, setExercises] = useState([]);
  const [filterDate, setFilterDate] = useState('');
  const [totalCalories, setTotalCalories] = useState(0);

  const fetchExercises = async () => {
    try {
      const { data } = await getExercises(userId, filterDate);
      setExercises(data);
      setTotalCalories(data.reduce((sum, ex) => sum + ex.caloriesBurned, 0));
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, [userId, filterDate]);

  const handleDelete = async (exerciseId) => {
    try {
      await deleteExercise(userId, exerciseId);
      fetchExercises(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting exercise:', error);
    }
  };

  return (
    <div className="mt-4">
      <h2 className="mb-3">Your Exercises</h2>
      <div className="mb-3">
        <input
          type="date"
          className="form-control"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>
      <ul className="list-group">
        {exercises.map((exercise) => (
          <li
            key={exercise._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{exercise.name}</strong> <br />
              <span>Duration: {exercise.duration} mins</span>
            </div>
            <span className="badge bg-primary">{exercise.caloriesBurned} calories</span>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete(exercise._id)}
            >
              Delete
            </button>
          </li>
        ))}
        <li className="list-group-item text-end">
          <strong>Total Calories Burned: {totalCalories}</strong>
        </li>
      </ul>
    </div>
  );
};

export default ExerciseList;
