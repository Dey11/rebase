import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import userRoutes from './routes/userRoutes';
// Create an Express application
const app = express();
require("dotenv").config()
const PORT = process.env.PORT;
const mongo_url = process.env.MONGO_URL

//middleware to enable CORS
app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({credentials:true,origin:"http://localhost:3000"}))

//Mount the routes.
app.use('/api/users',userRoutes)

// Define routes
app.get('/', (req: Request, res: Response) => {
  res.send("Helloo world this is my server .");
});


// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  try {
    await mongoose.connect(mongo_url as string)
    console.log("DataBase is successfully connected.")
    
  } catch (error) {
    console.log("Error to connect Database.")
    
  }
 
});


