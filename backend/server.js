import connectToMongo from "./db.js";
import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';


connectToMongo();
dotenv.config();

const app = express();
import authroutes from "./routes/auth.js";
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authroutes);
app.use('/api/messages', messageRoutes )
app.use('/api/users', userRoutes )

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Example app listening on port at http://localhost:${port}`);
});
