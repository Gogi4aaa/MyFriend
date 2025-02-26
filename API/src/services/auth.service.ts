import prisma from "../prisma/prisma";
import { NextFunction, Request, Response } from "express";
import { Unauthorized } from "../errors/Unauthorized";
import { comparePassword, hashPassword } from "../utilities/password-utils";
import { UnprocessableContent } from "../errors/UnprocessableContent";
import { generateToken } from "../utilities/jwt-utils";
import { Conflict } from "../errors/Conflict";
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

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const {
      username,
      email,
      password,
    } = req.body;
  
    const isUserEmailAlreadyExist = await prisma.users.findFirst(email);
    const isUserUsernameAlreadyExist = await prisma.users.findFirst(username);
  
    if (isUserEmailAlreadyExist) {
      if (isUserUsernameAlreadyExist) {
        return next(new Conflict("This username and email already exists!"));
      }
      return next(Conflict.emailAlreadyExists());
    }
    if (isUserUsernameAlreadyExist) {
      return next(Conflict.usernameAlreadyExists());
    }
  
    const hashedPassword = await hashPassword(password, 10);
    const userData = {
        username,
        email,
        password: hashedPassword,
      };
    const user = await prisma.users.create({
        data: userData
      })
    //verification code is sent
    emailService.sendVerifyUserEmail(userData.email, userData.username, verificationCode);
    return res.cookie("ValidationToken", user.id, {httpOnly: false}).status(201).json({message: "Successful Registered!", isRegistered: true});
  };