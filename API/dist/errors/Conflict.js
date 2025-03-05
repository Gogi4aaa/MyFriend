"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conflict = void 0;
class Conflict extends Error {
    constructor(message) {
        super(message);
    }
    static usernameAlreadyExists() {
        return new Conflict("This username already exists!");
    }
    static emailAlreadyExists() {
        return new Conflict("This email already exists!");
    }
}
exports.Conflict = Conflict;
Conflict.TYPE_USERNAME_ALREADY_EXISTS = 'api/username-already-exists';
Conflict.TYPE_EMAIL_ALREADY_EXISTS = 'api/email-already-exists';
//# sourceMappingURL=Conflict.js.map