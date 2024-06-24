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
  UserPerformance as PrismaUserPerformance,
  Question as PrismaQuestion,
  User as PrismaUser,
} from "@prisma/client";

export class UserPerformanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserPerformanceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userPerformance.count(args);
  }

  async userPerformances(
    args: Prisma.UserPerformanceFindManyArgs
  ): Promise<PrismaUserPerformance[]> {
    return this.prisma.userPerformance.findMany(args);
  }
  async userPerformance(
    args: Prisma.UserPerformanceFindUniqueArgs
  ): Promise<PrismaUserPerformance | null> {
    return this.prisma.userPerformance.findUnique(args);
  }
  async createUserPerformance(
    args: Prisma.UserPerformanceCreateArgs
  ): Promise<PrismaUserPerformance> {
    return this.prisma.userPerformance.create(args);
  }
  async updateUserPerformance(
    args: Prisma.UserPerformanceUpdateArgs
  ): Promise<PrismaUserPerformance> {
    return this.prisma.userPerformance.update(args);
  }
  async deleteUserPerformance(
    args: Prisma.UserPerformanceDeleteArgs
  ): Promise<PrismaUserPerformance> {
    return this.prisma.userPerformance.delete(args);
  }

  async getQuestion(parentId: string): Promise<PrismaQuestion | null> {
    return this.prisma.userPerformance
      .findUnique({
        where: { id: parentId },
      })
      .question();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.userPerformance
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
