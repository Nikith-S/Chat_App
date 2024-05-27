import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId, // Corrected typo: "ObejectId" to "ObjectId"
    ref: "User",
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId, // Corrected typo: "ObjectId" should be within mongoose.Schema.Types
    ref: "Message",
    default: [],
  }]
}, {
  timestamps: true // This will add createdAt and updatedAt timestamps
});

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;
