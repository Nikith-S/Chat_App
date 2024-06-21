import connectToMongo from "./db.js";
import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import http from 'http'; 
import { app, server } from "./socket/socket.js";
import path from "path"; 
import { fileURLToPath } from 'url';



connectToMongo()
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); 
  });

dotenv.config(); 


app.use(express.json());
app.use(cookieParser());

// Routes
import authroutes from "./routes/auth.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

app.use('/api/auth', authroutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);


const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"frontend", "dist" , "index.html"))
});




const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
