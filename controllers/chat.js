import Chat from "../models/Chat.js";

export const createChat = async (req, res, next) => {
    try {
        const receiverChat = await Chat.findOne({members: {$in: req.body.receiverId}})
        const newChat =  await Chat({
            members: [req.body.senderId, req.body.receiverId],
        });
     
        if (!receiverChat){
            const result = await newChat.save();
            res.status(201).json(result);
            // console.log("sec")
            // res.status(201).json("done");
        }else{
            res.status(404).json("not allowed!");
        }
    } catch (error) {
        res.status(500).json("couldn't create an account!")
    }
}

export const userChats = async (req, res, next) => {
    try {
        const chats = await Chat.find({
            members: {$in: req.params.userId}
        })
    
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json("Chat not found!");
    }
}

export const findChat =  async (req, res, next) => {
    try {
        const chat = await Chat.findOne({
            members: {$all: [req.params.senderId, req.params.receiverId]}
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getChats =  async (req, res, next) => {
    try {
        const chat = await Chat.find()
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteChat =  async (req, res, next) => {
    try {
        const chat = await Chat.findByIdAndDelete(req.params.chatId)
        res.status(200).json("chat deleted!")
    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteChats =  async (req, res, next) => {
    const arr = await Chat.find()
    console.log(arr)
    try {
        const chat = await Chat.deleteMany()
        res.status(200).json("chat deleted!")
    } catch (error) {
        res.status(500).json(error)
    }
}