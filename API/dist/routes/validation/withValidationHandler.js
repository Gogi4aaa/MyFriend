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
Object.defineProperty(exports, "__esModule", { value: true });
exports.withValidationHandler = void 0;
const express_validator_1 = require("express-validator");
const Validation_1 = require("../../errors/Validation");
const withValidationHandler = (handler) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = (0, express_validator_1.validationResult)(req);
    try {
        result.throw();
    }
    catch (e) {
        return next(new Validation_1.Validation(e));
    }
    req.body = Object.assign({}, (0, express_validator_1.matchedData)(req));
    return yield ((_a = handler(req, res, next)) === null || _a === void 0 ? void 0 : _a.catch(next));
});
exports.withValidationHandler = withValidationHandler;
//# sourceMappingURL=withValidationHandler.js.map