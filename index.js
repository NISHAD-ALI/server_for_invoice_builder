import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/router.js';
dotenv.config();

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: ["https://invoicebuilderpro.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
console.log(process.env.MONGOURL)
mongoose.connect(process.env.MONGOURL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err.message));
  app.use('/', router); 
  
app.listen(3000, () => console.log(`Server Started At 3000`))  