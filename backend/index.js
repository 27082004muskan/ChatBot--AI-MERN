import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import chatbotRoutes from './routes/chatbot.route.js';
import cors from 'cors';

const app=express();
dotenv.config();

// Add this line to enable CORS
app.use(cors({
    origin: 'http://localhost:5173' // Your React app's port
}));

const PORT = process.env.PORT || 3000;
//middleware

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("Connected to MongoDB");
}).catch((error)=>{
  console.log("Failed to connect to MongoDB",error);
})


//Defining Routes
app.use('/bot/v1/',chatbotRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})