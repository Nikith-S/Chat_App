
import jwt from "jsonwebtoken"
import User from "../models/user.model.js";


const protectRoute =async (req, res, next) => {
    try{
    const token = req.cookies.jwt;
    if(!token){
        return res.status(400).json({error:"Unathorized - No token Provided"})
    }

    const decoded = jwt.verify(token , process.env.JWT_SECRET);
    if(!decoded){
        return res.status(400).json({error:"Unathorized - Invalid token"})
    }
    const user = await User.findById(decoded.userId).select("-password");

    if(!user){
        res.status(500).json({error:"user not found"})
    }
    req.user= user
    next();

    }
    catch(error) {
        console.log("error in protected Middleware", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}
export default protectRoute