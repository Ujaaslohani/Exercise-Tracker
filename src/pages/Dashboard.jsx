import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import ExerciseList from '../components/ExerciseList';
import ExerciseForm from '../components/ExerciseForm';

const Dashboard = () => {
  const userId = localStorage.getItem('userId'); 
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prev) => !prev); 
  };
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <ExerciseForm userId={userId} onExerciseAdded={handleRefresh} />
        <ExerciseList userId={userId} key={refresh} />
      </div>
    </div>
  );
};

export default Dashboard;
