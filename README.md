# To-Do List Backend API

**Assignment 28 (Part 1)**
**Tech Stack**: Node.js, Express.js, MongoDB (with Mongoose)

---

## Project Overview

This project implements the backend of a **To-Do List Application** using:

* **Node.js**: JavaScript runtime environment.
* **Express.js**: Web framework for building APIs.
* **MongoDB**: NoSQL database used to persist task data.
* **Mongoose**: ODM library for modeling application data.
* **Dotenv**: For managing environment variables.

It includes full CRUD support, route modularization, MongoDB connection configuration, and request validation.

---

## Features Implemented

* Add a new to-do item (`POST /api/todos`)
* Fetch all to-dos with optional filters (`GET /api/todos`)
* Get a specific to-do by ID (`GET /api/todos/:id`)
* Update a to-do item (`PUT /api/todos/:id`)
* Delete a to-do item (`DELETE /api/todos/:id`)
* Mark a task as completed (`PATCH /api/todos/:id/complete`)

---

## Project Setup

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/todo-list-api.git
cd todo-list-api
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Environment Variables**
   Create a `.env` file in the root folder and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. **Run the Server**

```bash
npm start
```

---

## API Base URL

```
http://localhost:5000/api/todos
```

---

## Testing

All routes can be tested using **Postman** or any REST client:

* Set `Content-Type: application/json` in headers.
* Use appropriate method (`GET`, `POST`, etc.) based on the endpoint.

---

## Project Structure

```
├── src
│   ├── config
│   │   └── db.js            // MongoDB connection setup
│   ├── controllers
│   │   └── todoController.js // Logic for each API
│   ├── models
│   │   └── Todo.js           // Mongoose schema
│   └── routes
│       └── todoRoutes.js     // Express routes
├── server.js                 // Entry point
└── .env                      // Environment variables
```

---

## Challenges Faced and Solutions

1. **MongoDB Connection Errors**

   * Initially faced issues due to incorrect URI format.
   * Resolved by adding proper credentials and testing connection with `mongoose.connect()`.

2. **Route Modularity**

   * Keeping routes, controllers, and models in a clean structure required refactoring.
   * Used `express.Router()` and separated controller logic for clarity.

3. **Validation and Error Handling**

   * Used `express.json()` and `body-parser` to manage incoming data formats.
   * Added checks to return 404 or 400 errors for missing or invalid data.

4. **Cross-Origin Resource Sharing (CORS)**

   * Configured CORS to allow frontend hosted at `http://localhost:5173`.

---

## Deployment Notes

* When deploying to production, update `MONGO_URI` with a secure production URI.
* Enable authentication and validation for added security.
* Replace hardcoded CORS origin with environment variable or dynamic value.

---

##
