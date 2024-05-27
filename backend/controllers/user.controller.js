
import User from "../models/user.model.js"
export const getUsersSide =async(req , res) => {
try {

    const loggedInUserId = req.user._id;
    
    const filteredUsers = await User.find({_id: {$ne : loggedInUserId }}).select("-password")

    res.status(500).json(filteredUsers);

}
catch(error){
    console.log("error in get user in getUserSideBar", error.message)
    res.status(500).json({error:"Internal server error"})
}
}