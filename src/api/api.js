import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const registerUser = (data) => API.post('/users/register', data);
export const loginUser = (data) => API.post('/users/login', data);
export const deleteUser = (userId) => API.delete(`/users/${userId}`);

export const addExercise = (userId, exercise) => API.post(`/exercises/${userId}`, exercise);
export const deleteExercise = (userId, exerciseId) => API.delete(`/exercises/${userId}/${exerciseId}`);
export const getExercises = (userId) => API.get(`/exercises/${userId}`);
