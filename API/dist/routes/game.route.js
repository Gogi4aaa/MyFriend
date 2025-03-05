"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const game_controller_1 = require("../controllers/game.controller");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
router.put("/update-score", auth_1.verifyToken, game_controller_1.updateScore);
exports.default = router;
//# sourceMappingURL=game.route.js.map