const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const cors = require('cors');
require('dotenv').config();

const app=express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/events',eventRoutes);

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({error:'Something went wrong'});
})
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})