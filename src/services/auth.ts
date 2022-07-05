import prisma from "../utils/prisma";
import bcrypt from "bcrypt";
import HttpException from "../utils/http-exception";
import { RegisterInput, LoginInput, User } from "../schemas/user";
import jwt from "jsonwebtoken";

const checkUserUniqueness = async (email: string) => {
  const existingUserByEmail = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      email: true,
    },
  });

  console.log(existingUserByEmail);

  if (existingUserByEmail) {
    throw new HttpException(422, {
      errors: {
        ...(existingUserByEmail ? { email: ["has already been taken"] } : {}),
      },
    });
  }
};

export const register = async (
  RegisterInput: Omit<RegisterInput, "id">
): Promise<User> => {
  const { username, email, password } = RegisterInput;

  await checkUserUniqueness(email);

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  return prisma.user.create({
    data: {
      username,
      email,
      password: hashedPass,
    },
    select: {
      id: true,
      username: true,
      email: true,
    },
  });
};

export const login = async (LoginInput: LoginInput): Promise<User | any> => {
  const { email, password } = LoginInput;

  const user: any = await prisma.user.findUnique({
    where: {
      email,
    },

    select: {
      id: true,
      email: true,
      username: true,
      password: true,
    },
  });

  if (user) {
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      return {
        id: user.id,
        email: user.email,
        username: user.username,
        token: jwt.sign(user, process.env.JWT_SECRET || "superSecret", {
          expiresIn: "3600s",
        }),
      };
    }
  }

  throw new HttpException(403, {
    errors: {
      "email or password": ["is invalid"],
    },
  });
};
