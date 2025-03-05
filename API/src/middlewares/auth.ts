import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

// export function authenticateToken(req: Request, res: Response, next: NextFunction) {
//     const authHeader = req.headers['authorization'];
//     if (!authHeader) return res.status(401).json({ error: 'No token provided' });

//     const token = authHeader.split(' ')[1];
//     jwt.verify(token, process.env.JWT_SECRET_KEY!, (err: any, user: any) => {
//         if (err) return res.status(403).json({ error: 'Invalid token' });

//         // Attach user information to a custom header
//         res.setHeader('X-User-Id', user.id);
//         res.setHeader('X-User-Name', user.name); // For example, sending 'user' info in headers
//         next();
//     });
// }

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message: "Not Authenticated!"})
    }

    jwt.verify(token,process.env.JWT_SECRET_KEY!, async (err: any, payload: any) => {
        if(err){
            return res.status(401).json({message: "Token is not Valid!"})
        }
        req.userId = payload.id;
        
        next();
    })
}