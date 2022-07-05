import express from "express";
import { register, login } from "../controllers/auth";
import { registerValidate, loginValidate } from "../validations/auth";

const router = express.Router();

router.post("/register", registerValidate, register);
router.post("/login", loginValidate, login);

export default router;
