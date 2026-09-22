import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import analyseRoute from './routes/analyse.route.js';
import cors from 'cors'

const app = express();
app.use(cors(
    {origin: 'http://localhost:5173', credentials: true}
));
app.use(express.json());
app.use('/api', analyseRoute);




export default app;
