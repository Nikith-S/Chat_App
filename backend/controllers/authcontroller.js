import User from "../models/user.model.js";
import bcrypt from "bcryptjs"; 
import generateToken from "../utils/generateToke.js";

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmpassword, gender } = req.body;

        // Check if passwords match
        if (password !== confirmpassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        // Check if the username already exists
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Placeholder avatar
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Create a new user
        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
        });

        await newUser.save();

        // Respond with the new user details
        if (newUser) {
            generateToken(newUser.id,res)
            return res.status(201).json({
                _id: newUser.id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            return res.status(500).json({ error: "Internal server error" });
        }
    } catch (error) {
        console.error("Error in sign up controller", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const login = async(req, res) => {
    try{
  const {username , password} = req.body;
        const user = await User.findOne({username})
        const isPassword = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPassword){
            res.status(404).json({error:"Invalid username or password"})
        }

        generateToken(user._id, res)

        res.status(200).json({
            _id:user.id,
            username:user.username,
            profilePic:user.profilePic

        });




    }
    catch(error){
        console.error("Error in sign up controller", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }



};

export const signout = (req, res) => {
   try{
    res.cookie("jwt","", {maxAge:0})
    res.status(200).json({message:"loggedout succefully"})
   }

    catch(error){
        console.error("Error in sign up controller", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }

};
