# Workout Manager Application

The Workout Manager is a web application that allows users to track their daily workout routines. Users can set exercises, specify the number of sets and reps, and record their progress. The application is divided into two main parts: the frontend and the backend.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Folder Structure](#folder-structure)
- [Future Scope](#future-scope)
## Getting Started

To get started with the Workout Manager application, follow these steps:

### Prerequisites

Before you begin, make sure you have the following software installed on your machine:

- **Node.js:** You can download it from [nodejs.org](https://nodejs.org/).

### Installation

Clone the GitHub repository:
git clone https://github.com/howabsurd/workoutapp.git

**Navigate to the backend folder:**

cd workoutapp/backend

Create a .env file in the backend folder and fill in the following information:

**.env**

PORT=8000  # Port for the backend server

MONGODB_URI=your-mongodb-connection-string

JWT_SECRET=your-jwt-secret-key

Replace your-mongodb-connection-string with your MongoDB database connection string and your-jwt-secret-key with a secure secret key for JWT token generation.

**Install backend dependencies and start the server:**

npm install

npm start

**Open a new terminal and navigate to the frontend folder:**

cd ../frontend

Install frontend dependencies and start the React app:

npm install

npm start

The Workout Manager application should now be running. You can access it by opening your web browser and visiting http://localhost:3000.

Usage

Once the application is running, you can use it to track your daily workout routines. You can add exercises, specify the number of sets and reps, and record your progress.

### Authentication
The Workout Manager uses custom authentication with JWT (JSON Web Tokens) for user authentication. When you create an account or log in, you will receive a JWT token that you can use to access protected routes.

### Folder Structure
The application is organized into two main folders:

frontend: Contains the React frontend of the application.

backend: Contains the Node.js backend, including API routes, database models, and authentication logic.

### Future Scope
In the future, we plan to expand the functionality of the Workout Manager application to include the ability to track daily meals for calorie tracking. Stay tuned for updates and improvements to the application!




