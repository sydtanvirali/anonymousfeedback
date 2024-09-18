import { Schema } from "inspector/promises";
import mongoose from "mongoose";

export interface Message extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  content: string;
  createdAt: Date;
}

export const messageSchema: mongoose.Schema<Message> = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
