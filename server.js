require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/db");
const todoRoutes = require("./src/routes/todoRoutes");

// Comments are added for my own information
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); 
app.use(express.json()); // Enable JSON parsing

app.use(bodyParser.json());

// Routes
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
