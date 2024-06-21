import express from "express";
import { signup } from "../controllers/authcontroller.js";
import { logout } from "../controllers/authcontroller.js";
import { login } from "../controllers/authcontroller.js";


const router = express.Router();

router.post("/login" , login);
router.post("/signup", signup);
router.get("/logout", logout);


export default router;