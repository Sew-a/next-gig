import { prisma } from "@/lib/prisma";

export const resolvers = {
  Query: {
    questions: async () => {
      return await prisma.question.findMany({
        where: { isActive: true },
        orderBy: { createdAt: "asc" },
      });
    },
    question: async (_: unknown, { id }: { id: number }) => {
      return await prisma.question.findUnique({ where: { id } });
    },
  },
  Mutation: {
    addQuestion: async (
      _: unknown,
      { question, answer }: { question: string; answer: string }
    ) => {
      return await prisma.question.create({ data: { question, answer } });
    },
    updateQuestion: async (
      _: unknown,
      {
        id,
        question,
        answer,
        isActive,
      }: {
        id: number;
        question?: string;
        answer?: string;
        isActive?: boolean;
      }
    ) => {
      return await prisma.question.update({
        where: { id },
        data: { question, answer, isActive },
      });
    },
    deleteQuestion: async (_: unknown, { id }: { id: number }) => {
      return await prisma.question.delete({ where: { id } });
    },
    sendContactMessage: async (
      _: unknown,
      {
        firstName,
        lastName,
        message,
      }: { firstName: string; lastName: string; message: string }
    ) => {
      return await prisma.contactMessage.create({
        data: { firstName, lastName, message },
      });
    },
  },
};
