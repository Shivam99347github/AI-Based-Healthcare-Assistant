# my_medical_store

## Overview

my_medical_store is a full-stack e-commerce web application 


## Demo Video

Watch the demo video of the project:

[![Demo Video]()



## Features



## Project Structure

The project is organized into two main directories: `backend` and `frontend`, each with its own structure and functionality.

    ```bash
    my_medical_store/
    ├── backend/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── config/
    │   ├── .env
    │   ├── package.json
    │   └── server.js
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── pages/
    │   │   ├── App.js
    │   │   ├── index.js
    │   │   └── ...
    │   ├── package.json
    │   └── ...
    └── README.md     


## Technologies Used

### Frontend:
- **React.js**: JavaScript library for building user interfaces.
- **React-Bootstrap**: Bootstrap components for styling.
- **Axios**: For making HTTP requests to the backend.
- **React Router**: For navigation between pages.

### Backend:
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing product and user data.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **Multer**: Middleware for handling `multipart/form-data`, used for file uploads.


## Run the Project on Your Local Machine

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (Local MongoDB server or MongoDB Atlas for cloud database)
- **Git** (to clone the repository)

### Steps to Run the Backend

1. **Clone the Repository**:
   First, clone the project to your local machine.
   
   ```bash
   git clone https://github.com/your-username/perfume-shop.git
   cd perfume-shop

2. **Navigate to the Backend Directory**:

    ```bash
     cd backend

3. **Install Dependencies**:

     ```bash
     npm install

4. **Set Up Environment Variables**:
   Create a .env file in the root of the backend directory and add the following environment variables:

     ```bash
   PORT=5000 
   MONGO_URI=your_mongodb_connection_string
Replace your_mongodb_connection_string with your MongoDB connection string (either from a local MongoDB instance or MongoDB Atlas).


5. **Seed the Database with Mock Data:**:
   Run the seed script:

    ```bash
    node seed.js

6. **Start the backend server:**:

    ```bash
     npm start
The backend server will start on http://localhost:5000.

### Steps to Run the Frontend

1. **Navigate to the Frontend Directory:**:
   Open a new terminal window or tab and navigate to the frontend part of the project.

     ```bash
     cd frontend


2. **Install Frontend Dependencies:**:

   ```bash
   npm install


3. **Set Up API URL in the Frontend:**:
   In the frontend/src/config.js file, update the API_URL to point to your local backend:

     ```bash
     const API_URL = 'http://localhost:5000/api';
     export default API_URL;

4. **Run the Frontend:**:
 Start the frontend using:

    ```bash
    npm start
The frontend will be running on http://localhost:3000.


## Now, with both the frontend and backend running locally:

- **The backend will be running at http://localhost:5000.**
- **The frontend will be running at http://localhost:3000.**

You can visit http://localhost:3000 in your browser to interact with the application.


