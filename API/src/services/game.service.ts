import prisma from "../prisma/prisma";
import { NextFunction, Request, Response } from "express";
import { Unauthorized } from "../errors/Unauthorized";
import { UnprocessableContent } from "../errors/UnprocessableContent";
export const updateScore = async (req: Request, res: Response, next: NextFunction) => {
    const { newScore } = req.body;
    const userId = req.user.id; // Get user ID from token

    try {
        const updatedPlayer = await prisma.game.update({
            where: { id: userId },
            data: { points: newScore },
        });

        res.json({ success: true, player: updatedPlayer });
    } catch (error) {
        next(new UnprocessableContent()); 
    }
}