import type { Request, Response, NextFunction } from "express";
import { check } from "express-validator";
import { validateResult } from "../utils/validate";

export const registerValidate = [
  check("username").exists().not().isEmpty(),
  check("email").exists().isEmail().withMessage("Email is not valid"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Must be at least 5 chars long"),
  (request: Request, response: Response, next: NextFunction) => {
    validateResult(request, response, next);
  },
];

export const loginValidate = [
  check("email").exists().isEmail().withMessage("Email is not valid"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Must be at least 5 chars long"),
  (request: Request, response: Response, next: NextFunction) => {
    validateResult(request, response, next);
  },
];
