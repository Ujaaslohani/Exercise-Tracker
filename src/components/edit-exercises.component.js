import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditExercise() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [exercise, setExercise] = useState({
    username: '',
    description: '',
    duration: 0,
    date: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/exercises/${id}`)
      .then(response => {
        const date = new Date(response.data.date).toLocaleDateString('en-CA');
        setExercise({ ...response.data, date });
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const onChangeUsername = (e) => {
    setExercise({ ...exercise, username: e.target.value });
  };

  const onChangeDescription = (e) => {
    setExercise({ ...exercise, description: e.target.value });
  };

  const onChangeDuration = (e) => {
    setExercise({ ...exercise, duration: e.target.value });
  };

  const onChangeDate = (e) => {
    setExercise({ ...exercise, date: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:5000/exercises/update/${id}`, exercise)
      .then(response => {
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input type="text" required className="form-control" value={exercise.username} onChange={onChangeUsername} />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text" required className="form-control" value={exercise.description} onChange={onChangeDescription} />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input type="number" required className="form-control" value={exercise.duration} onChange={onChangeDuration} />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <input type="date" required className="form-control" value={exercise.date} onChange={onChangeDate} />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default EditExercise;