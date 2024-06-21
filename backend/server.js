import connectToMongo from "./db.js";
import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import http from 'http'; // Import http module for server creation
import { app, server } from "./socket/socket.js"; // Assuming server is exported from socket.js

// Connect to MongoDB
connectToMongo()
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process on database connection error
  });

dotenv.config(); // Load environment variables from .env file

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
import authroutes from "./routes/auth.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
app.use('/api/auth', authroutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// Server configuration
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
