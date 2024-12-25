import axios from 'axios';

const API = axios.create({
  baseURL: 'https://pinto-quaint-flight.glitch.me/api',
});

// User-related endpoints
export const registerUser = (data) => API.post('/users/register', data);
export const loginUser = (data) => API.post('/users/login', data);
export const deleteUser = (userId) => API.delete(`/users/${userId}`);

// Exercise-related endpoints
export const addExercise = (userId, exercise) => API.post(`/exercises/add`, { userId, ...exercise });
export const deleteExercise = (userId, exerciseId) => API.delete(`/exercises/${userId}/${exerciseId}`);
export const getExercises = (userId, date = null) => {
  const params = date ? { date } : {};
  return API.get(`/exercises/${userId}`, { params });
};

// Fetch total calories burned for a specific date
export const getDailyCalories = (userId, date) => 
  API.get('/exercises/calories', { params: { userId, date } });

// Fetch exercise names for dropdown
export const getExerciseNames = () => API.get('/exercises/name');
