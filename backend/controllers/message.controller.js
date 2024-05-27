import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // Find the conversation between the sender and receiver
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // If the conversation does not exist, create a new one
    if (!conversation) {
      conversation = new Conversation({
        participants: [senderId, receiverId],
        messages: [],  // Initialize the messages array
      });
    //   await conversation.save();
    }

    // Create a new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // Save the new message
    // await newMessage.save();

    // Add the new message ID to the conversation's messages array
    if(newMessage){
    conversation.messages.push(newMessage._id);
    // await conversation.save();

    await Promise.all([conversation.save(), newMessage.save()])

    // Respond with the newly created message
    res.status(201).json(newMessage);
    }
  } catch (error) {
    console.log("Error in message send:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};




export const getMessage = async(req , res) => {
try{

    const {id : userToChatId} = req.params;
    const senderId = req.user._id;

    const conversation =await Conversation.findOne({
        participants: { $all: [senderId, userToChatId]}  
    }).populate("messages");


    if(!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(201).json(messages)


}

catch (error) {
    console.log("Error in message send:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }

}
