# Exercise Tracker Application

This repository contains the frontend and backend code for the Exercise Tracker Application. The app allows users to track their exercises, view calories burned, and manage their exercise logs.

---

## Features

### Frontend
- User Authentication (Register/Login)
- Add Exercises (Name, Weight, Duration, Date)
- View Exercise List with Calories Burned and Duration
- Delete Exercises
- Filter Exercises by Date
- Logout functionality

### Backend
- User Registration and Login with JWT Authentication
- CRUD Operations for Exercises
- MongoDB Integration

---

## Tech Stack

### Frontend
- **React.js**
- **Bootstrap** for styling
- **React Router** for navigation

### Backend
- **Node.js** with Express.js
- **MongoDB** for database
- **Mongoose** for database schema and queries

---

## Installation and Setup

### Prerequisites
- Node.js (v16.x or higher)
- MongoDB (local or MongoDB Atlas)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Ujaaslohani/Exercise-Tracker-Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
   The server will run at `http://localhost:3000`.

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Ujaaslohani/Exercise-Tracker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```
   The app will run at `http://localhost:5173`.

---

## Future Enhancements
- Add exercise statistics (e.g., weekly trends, graphs)
- Improve UI/UX with animations
- Add functionality to update exercises

---

