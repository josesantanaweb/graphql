import type { Request, Response } from "express";
import * as AuthService from "../services/auth";

export const register = async (request: Request, response: Response) => {
  try {
    const user = request.body;
    const newUser = await AuthService.register(user);
    return response.status(201).json(newUser);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
};

export const login = async (request: Request, response: Response) => {
  try {
    const user = await AuthService.login(request.body);
    return response.json({ user });
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
};
