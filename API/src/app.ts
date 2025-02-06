import express from 'express';
import 'dotenv/config'; 
import cors from "cors";
export const app = express();
const corsOptions = {
    origin: process.env.CORS_URL
}
app.use(express.json());
app.use(cors(corsOptions))

export default app;