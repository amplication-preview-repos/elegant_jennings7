import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExamBoardServiceBase } from "./base/examBoard.service.base";

@Injectable()
export class ExamBoardService extends ExamBoardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
