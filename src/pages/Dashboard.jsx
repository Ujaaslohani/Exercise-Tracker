import React from 'react';
import Navbar from '../components/Navbar';
import ExerciseList from '../components/ExerciseList';
import ExerciseForm from '../components/ExerciseForm';

const Dashboard = () => {
  const userId = localStorage.getItem('userId'); 

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <ExerciseForm userId={userId} onExerciseAdded={() => {}} />
        <ExerciseList userId={userId} />
      </div>
    </div>
  );
};

export default Dashboard;
