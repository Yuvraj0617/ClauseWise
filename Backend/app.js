import express from 'express';
import analyseRoute from './routes/analyse.route.js';
import cors from 'cors'

const app = express();
app.use(cors(
    {origin: process.env.Frontend_URL, credentials: true}
));
app.use(express.json());
app.use('/api', analyseRoute);




export default app;
