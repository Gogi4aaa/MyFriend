import express, { RequestHandler } from "express";
import { withValidationHandler } from "./validation/withValidationHandler";
import { updateScore } from "../controllers/game.controller";
import { verifyToken } from '../middlewares/auth';
const router = express.Router();

router.put("/update-score", verifyToken as RequestHandler, updateScore)

export default router;