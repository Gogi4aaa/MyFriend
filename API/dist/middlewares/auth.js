"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Not Authenticated!" });
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            return res.status(401).json({ message: "Token is not Valid!" });
        }
        req.userId = payload.id;
        next();
    }));
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=auth.js.map