import { NextFunction, Request, Response } from "express";
import * as gameService from "../services/game.service";
export const updateScore = async (req: Request, res: Response, next: NextFunction) => {
    await gameService.updateScore(req, res, next);
}