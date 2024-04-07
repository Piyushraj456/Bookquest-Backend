import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/Bookquest';

mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB Server...");
});

db.on('disconnected', () => {
    console.log("Disconnected from MongoDB Server");
});

db.on('error', (error) => {
    console.log("MongoDB Connection Error:", error);
});

export default db;
