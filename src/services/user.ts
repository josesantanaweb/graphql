import prisma from "../utils/prisma";
import { User } from "../schemas/user";

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
