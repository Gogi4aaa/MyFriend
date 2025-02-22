import express from 'express';
import 'dotenv/config'; 
import cors from "cors";
import authRoute from "./routes/auth.route";
import gameRoute from "./routes/game.route";
export const app = express();
const corsOptions = {
    origin: process.env.CORS_URL
}
app.use(express.json());
app.use(cors(corsOptions))
app.use("/api/auth", authRoute)
app.use("/api/game", gameRoute)
export default app;