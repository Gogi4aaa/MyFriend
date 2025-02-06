import express from "express";
import { loginValidation } from "./validation/auth.validation";
import { withValidationHandler } from "./validation/withValidationHandler";
import { login } from "../controllers/auth.controller";

const router = express.Router();

router.post("/login", ...loginValidation, withValidationHandler(login))

export default router;