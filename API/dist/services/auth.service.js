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
exports.register = exports.login = void 0;
const prisma_1 = __importDefault(require("../prisma/prisma"));
const Unauthorized_1 = require("../errors/Unauthorized");
const password_utils_1 = require("../utilities/password-utils");
const UnprocessableContent_1 = require("../errors/UnprocessableContent");
const jwt_utils_1 = require("../utilities/jwt-utils");
const Conflict_1 = require("../errors/Conflict");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const user = yield prisma_1.default.users.findUnique({
            where: { username }
        });
        if (!user) {
            return next(new Unauthorized_1.Unauthorized("Invalid Credentials"));
        }
        const isPasswordValid = yield (0, password_utils_1.comparePassword)(password, user.password);
        if (!isPasswordValid) {
            return next(new Unauthorized_1.Unauthorized("Invalid Credentials"));
        }
        const token = yield (0, jwt_utils_1.generateToken)({ sub: user.id });
        return res.status(200).json({ token: token, isLoggedIn: true });
    }
    catch (ex) {
        return next(new UnprocessableContent_1.UnprocessableContent());
    }
});
exports.login = login;
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, } = req.body;
    console.log(username, email, password);
    const isUserEmailAlreadyExist = yield prisma_1.default.users.findUnique({ where: {
            email: email
        }
    });
    const isUserUsernameAlreadyExist = yield prisma_1.default.users.findUnique({
        where: {
            username
        }
    });
    if (isUserEmailAlreadyExist) {
        if (isUserUsernameAlreadyExist) {
            return next(new Conflict_1.Conflict("This username and email already exists!"));
        }
        return next(Conflict_1.Conflict.emailAlreadyExists());
    }
    if (isUserUsernameAlreadyExist) {
        return next(Conflict_1.Conflict.usernameAlreadyExists());
    }
    const hashedPassword = yield (0, password_utils_1.hashPassword)(password, 10);
    const userData = {
        username,
        email,
        password: hashedPassword,
    };
    const user = yield prisma_1.default.users.create({
        data: userData
    });
    //verification code is sent
    return res.cookie("ValidationToken", user.id, { httpOnly: false }).status(201).json({ message: "Successful Registered!", isRegistered: true });
});
exports.register = register;
//# sourceMappingURL=auth.service.js.map