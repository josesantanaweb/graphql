import prisma from "../../utils/prisma";
import { User, UserInput } from "./user.dto";

export const getAll = async (): Promise<User[]> => {
  return prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
    },
  });
};

export const getOne = async (id: number): Promise<User | null> => {
  return prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      username: true,
      email: true,
    },
  });
};

export const create = async (user: Omit<UserInput, "id">): Promise<User> => {
  const { username, email, password, avatar } = user;
  return prisma.user.create({
    data: {
      username,
      email,
      password,
      avatar,
    },
    select: {
      id: true,
      username: true,
      email: true,
    },
  });
};
