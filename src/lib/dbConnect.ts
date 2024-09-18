import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to DB");
    return;
  }
  try {
    const db = await mongoose.connect((process.env.MONGO_URI as string) || "");
    connection.isConnected = db.connections[0].readyState;
    console.log("Successfully Connected to DB");
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
}
