import express from 'express';
import analyseRoute from './routes/analyse.route.js';
import cors from 'cors';

const app = express();

const allowedOrigins = [
  process.env.Frontend_URL?.replace(/\/$/, '')
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use('/api', analyseRoute);

app.get('/', (req, res) => {
  res.send('Welcome to ClauseWise API');
});

export default app;