"use server";

import prisma from "@/db";
import { Prisma } from "@prisma/client";

export const getFlashCards = async () => {
  return await prisma.flashcard.findMany();
};

export const getFlashCard = async (slug: string) => {
  return await prisma.flashcard.findFirst({
    where: {
      slug,
    },
  });
};

export const createFlashCard = async (data: Prisma.FlashcardCreateInput) => {
  return await prisma.flashcard.create({
    data,
  });
};

export const updateFlashCard = async (
  id: number,
  data: Prisma.FlashcardUpdateInput
) => {
  return await prisma.flashcard.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteFlashCard = async (slug: string) => {
  const flashcard = await getFlashCard(slug);
  if (flashcard) {
    return await prisma.flashcard.delete({
      where: {
        id: flashcard.id,
      },
    });
  }
};

export const getCategories = async () => {
  return await prisma.category.findMany();
};

export const getCategory = async (slug: string) => {
  return await prisma.category.findFirst({
    where: {
      slug,
    },
  });
};

export const getCategoryById = async (id: number) => {
  return await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      flashcards: true,
    },
  });
};

export const createCategory = async (data: Prisma.CategoryCreateInput) => {
  return await prisma.category.create({
    data,
  });
};

export const updateCategory = async (
  id: number,
  data: Prisma.CategoryUpdateInput
) => {
  return await prisma.category.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteCategory = async (slug: string) => {
  const category = await getCategory(slug);
  if (category) {
    return await prisma.category.delete({
      where: {
        id: category.id,
      },
    });
  }
};
