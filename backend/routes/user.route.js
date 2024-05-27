import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersSide } from "../controllers/user.controller.js";


const router = express.Router();

router.get('/',protectRoute,getUsersSide)




export default router;