import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Types.ObjectId, // Corrected typo: "mongoose.Types.ObjectId" should not be quoted
    ref: "User",
    required: true
  },
  receiverId: { // Corrected typo: "recevierId" to "receiverId"
    type: mongoose.Types.ObjectId, // Corrected typo: "mongoose.Types.ObjectId" should not be quoted
    ref: "User",
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true // This will add createdAt and updatedAt timestamps
});

const Message = mongoose.model("Message", messageSchema); // Corrected typo: "Messaage" to "Message"
export default Message;
