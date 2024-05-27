import express from "express";
import { signup } from "../controllers/authcontroller.js";
import { signout } from "../controllers/authcontroller.js";
import { login } from "../controllers/authcontroller.js";


const router = express.Router();

router.get("/login" , login);
router.post("/signup", signup);
router.get("/logout", signout);


export default router;