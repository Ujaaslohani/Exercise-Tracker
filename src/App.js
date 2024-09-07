// App.js
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ExerciseList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercises.component";
import CreateUser from "./components/create-user.component";
import Login from "./components/login.component";
import Register from './components/register.component';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>   
      <Routes>
        <Route path='/register' exact element={<Register/>} />
        <Route path='/' exact element={<Login />} />
        <Route path='/home' element={<Layout />}>
          <Route index element={<ExerciseList />} />
          <Route path='exercises' exact element={<ExerciseList />} />
          <Route path='create' exact element={<CreateExercise />} />
          <Route path='user' exact element={<CreateUser />} />
          <Route path='edit/:id' exact element={<EditExercise />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;