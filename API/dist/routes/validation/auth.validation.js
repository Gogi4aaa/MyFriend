"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = exports.loginValidation = void 0;
const express_validator_1 = require("express-validator");
const constants_1 = require("./constants");
exports.loginValidation = [
    (0, express_validator_1.body)("username", constants_1.NOT_EMPTY).trim().not().isEmpty(),
    (0, express_validator_1.body)("password", constants_1.NOT_EMPTY).trim().not().isEmpty()
];
exports.registerValidation = [
    (0, express_validator_1.body)("username", constants_1.NOT_EMPTY).trim().not().isEmpty(),
    (0, express_validator_1.body)("email", constants_1.NOT_EMPTY).trim().isEmail(),
    (0, express_validator_1.body)("password", constants_1.NOT_EMPTY).trim().not().isEmpty()
];
//# sourceMappingURL=auth.validation.js.map