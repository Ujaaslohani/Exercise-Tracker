import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar.component';
import ExerciseList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercises.component";
import CreateUser from "./components/create-user.component";
import Login from "./components/login.component";

function App() {
  return (
    <BrowserRouter> 
    <div className='container'>
      <Navbar/>
      <br/>
      <Routes>
        <Route path='/' exact element={<ExerciseList />} />
        <Route path='/edit/:id' exact element={<EditExercise />} />
        <Route path='/create' exact element={<CreateExercise />} />
        <Route path='/user' exact element={<CreateUser />} />
        <Route path='/login' exact element={<Login />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
