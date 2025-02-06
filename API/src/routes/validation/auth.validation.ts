import {body} from "express-validator";
import { NOT_EMPTY } from "./constants";

export const loginValidation = [
  body("username", NOT_EMPTY).trim().not().isEmpty(),
  body("password", NOT_EMPTY).trim().not().isEmpty()
]