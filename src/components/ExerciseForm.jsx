import React, { useState, useEffect } from 'react';
import { addExercise, getExerciseNames } from '../api/api';

const ExerciseForm = ({ userId, onExerciseAdded }) => {
  const [exerciseNames, setExerciseNames] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    weight: '',
    duration: '',
    date: '',
  });

  useEffect(() => {
    const fetchExerciseNames = async () => {
      try {
        const { data } = await getExerciseNames();
        setExerciseNames(data);
      } catch (error) {
        console.error('Error fetching exercise names:', error);
      }
    };
    fetchExerciseNames();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        userId,
        name: formData.name,
        weight: parseFloat(formData.weight),
        duration: parseFloat(formData.duration),
        date: formData.date,
      };
      await addExercise(userId, payload);
      onExerciseAdded(); // Refresh the exercise list
      setFormData({ name: '', weight: '', duration: '', date: '' });
    } catch (error) {
      console.error('Error adding exercise:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 shadow bg-light rounded">
      <h3 className="text-center">Add Exercise</h3>
      <div className="mb-3">
        <label htmlFor="exerciseName" className="form-label">Exercise Name</label>
        <select
          id="exerciseName"
          className="form-select"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        >
          <option value="">Select an exercise</option>
          {exerciseNames.map((exercise, index) => (
            <option key={index} value={exercise.name}>
              {exercise.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="weight" className="form-label">Weight (lbs)</label>
        <input
          type="number"
          id="weight"
          className="form-control"
          value={formData.weight}
          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="duration" className="form-label">Duration (minutes)</label>
        <input
          type="number"
          id="duration"
          className="form-control"
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date</label>
        <input
          type="date"
          id="date"
          className="form-control"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">Add Exercise</button>
    </form>
  );
};

export default ExerciseForm;
