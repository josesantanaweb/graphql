import type { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validateResult = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    validationResult(request).throw();
    return next();
  } catch (err) {
    response.status(403);
    response.send({ errors: err.array() });
  }
};
