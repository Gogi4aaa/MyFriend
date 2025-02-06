import prisma from "../prisma/prisma";
import { NextFunction, Request, Response } from "express";
import { Unauthorized } from "../errors/Unauthorized";
import { comparePassword } from "../utilities/password-utils";
import { UnprocessableContent } from "../errors/UnprocessableContent";
import { generateToken } from "../utilities/jwt-utils";
export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    try{   
        const user = await prisma.users.findUnique({
            where: {username}
        })   
        if(!user){
            return next(new Unauthorized("Invalid Credentials"))
        }
        const isPasswordValid = await comparePassword(password, user.password)
        if (!isPasswordValid) {
            return next(new Unauthorized("Invalid Credentials"));
        }
        const token = await generateToken({sub: user.id})
        return res.status(200).json({token: token, isLoggedIn: true})
    }
    catch(ex: any){
        return next(new UnprocessableContent());
    }
}