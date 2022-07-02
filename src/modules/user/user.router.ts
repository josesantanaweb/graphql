import express from "express";
import type { Request, Response } from "express";

import * as UserService from "./user.service";

export const userRouter = express.Router();

// GET: List of all Authors
userRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const users = await UserService.getAll();
    return response.status(200).json(users);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
