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
exports.updateScore = void 0;
const prisma_1 = __importDefault(require("../prisma/prisma"));
const UnprocessableContent_1 = require("../errors/UnprocessableContent");
const updateScore = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { newScore } = req.body;
    if (!req.user) {
        throw new Error("User not found in request");
    }
    const userId = req.userId; // Get user ID from token
    try {
        const updatedPlayer = yield prisma_1.default.game.update({
            where: { id: userId },
            data: { points: newScore },
        });
        res.json({ success: true, player: updatedPlayer });
    }
    catch (error) {
        next(new UnprocessableContent_1.UnprocessableContent());
    }
});
exports.updateScore = updateScore;
//# sourceMappingURL=game.service.js.map