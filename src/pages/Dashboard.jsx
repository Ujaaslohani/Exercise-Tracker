import React from 'react';
import Navbar from '../components/Navbar';
import ExerciseList from '../components/ExerciseList';
import ExerciseForm from '../components/ExerciseForm';

const Dashboard = () => {
  const userId = 'USER_ID_FROM_AUTH'; // Replace with userId from auth

  return (
    <div>
      <Navbar />
      <ExerciseForm userId={userId} onExerciseAdded={() => {}} />
      <ExerciseList userId={userId} />
    </div>
  );
};

export default Dashboard;
