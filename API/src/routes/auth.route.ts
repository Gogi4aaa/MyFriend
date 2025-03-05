import express from "express";
import { loginValidation, registerValidation } from "./validation/auth.validation";
import { withValidationHandler } from "./validation/withValidationHandler";
import { login, register } from "../controllers/auth.controller";

const router = express.Router();

router.post("/login", ...loginValidation, withValidationHandler(login))
router.post("/register", ...registerValidation, withValidationHandler(register))
export default router;