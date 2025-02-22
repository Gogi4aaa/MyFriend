import express, { RequestHandler } from "express";
import { withValidationHandler } from "./validation/withValidationHandler";
import { updateScore } from "../controllers/game.controller";
import { authenticateToken } from '../middlewares/auth';
const router = express.Router();

router.put("/update-score", authenticateToken as RequestHandler, updateScore)

export default router;