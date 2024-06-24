/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ExamBoard as PrismaExamBoard,
  Question as PrismaQuestion,
} from "@prisma/client";

export class ExamBoardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ExamBoardCountArgs, "select">
  ): Promise<number> {
    return this.prisma.examBoard.count(args);
  }

  async examBoards(
    args: Prisma.ExamBoardFindManyArgs
  ): Promise<PrismaExamBoard[]> {
    return this.prisma.examBoard.findMany(args);
  }
  async examBoard(
    args: Prisma.ExamBoardFindUniqueArgs
  ): Promise<PrismaExamBoard | null> {
    return this.prisma.examBoard.findUnique(args);
  }
  async createExamBoard(
    args: Prisma.ExamBoardCreateArgs
  ): Promise<PrismaExamBoard> {
    return this.prisma.examBoard.create(args);
  }
  async updateExamBoard(
    args: Prisma.ExamBoardUpdateArgs
  ): Promise<PrismaExamBoard> {
    return this.prisma.examBoard.update(args);
  }
  async deleteExamBoard(
    args: Prisma.ExamBoardDeleteArgs
  ): Promise<PrismaExamBoard> {
    return this.prisma.examBoard.delete(args);
  }

  async findQuestions(
    parentId: string,
    args: Prisma.QuestionFindManyArgs
  ): Promise<PrismaQuestion[]> {
    return this.prisma.examBoard
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .questions(args);
  }
}
