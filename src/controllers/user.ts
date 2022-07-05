import type { Request, Response } from "express";
import * as UserService from "../services/user";

export const getUsers = async (_request: Request, response: Response) => {
  try {
    const users = await UserService.getAll();
    return response.status(200).json(users);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
};
