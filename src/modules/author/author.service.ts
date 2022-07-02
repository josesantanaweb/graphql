import prisma from "../../utils/prisma";
import { Author, AuthorInput } from "./author.dto";

export const getAll = async (): Promise<Author[]> => {
  return prisma.author.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      createdAt: true,
    },
  });
};

export const getOne = async (id: number): Promise<Author | null> => {
  return prisma.author.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });
};

export const create = async (
  author: Omit<AuthorInput, "id">
): Promise<Author> => {
  const { firstName, lastName } = author;
  return prisma.author.create({
    data: {
      firstName,
      lastName,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });
};

export const update = async (
  author: Omit<Author, "id">,
  id: number
): Promise<Author> => {
  const { firstName, lastName } = author;
  return prisma.author.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });
};

export const remove = async (id: number): Promise<void> => {
  await prisma.author.delete({
    where: {
      id,
    },
  });
};
