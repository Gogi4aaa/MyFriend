import { NextFunction, Request, Response } from "express";
import * as authService from "../services/auth.service"
export const login = async (req: Request, res: Response, next: NextFunction) => {
    await authService.login(req, res, next);
}
export const register = async (req: Request, res: Response, next: NextFunction) => {
    await authService.register(req, res, next);
}