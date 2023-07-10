import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';



//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/result", resultRoutes);



//rest api
app.get('/', (req, res) => {
    res.send("<h1>welcome to this project</h1>")
});
//port
const PORT = process.env.PORT || 9000;
//run listen
app.listen(PORT, () => {
    console.log(`server is running on ${process.env.DEV_MODE} mode on port ${PORT}`);
})