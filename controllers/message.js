import Message from "../models/Message.js";

export const createMessage = async (req, res, next) => {
    const {chatId, senderId, text} = req.body;
    try {
        const newMessage = await Message({chatId, senderId, text});
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getMessage = async (req, res, next) => {
    const {chatId} = req.params;
    try {
        const msg = await Message.find({chatId});
        // console.log(msg)
        res.status(200).json(msg);
    } catch (error) {
        res.status(500).json(error);
    }
}
export const getMessages = async (req, res, next) => {
    try {
        const msg = await Message.find();
        res.status(200).json(msg);
    } catch (error) {
        res.status(500).json(error);
    }
}