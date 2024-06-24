import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserPerformanceServiceBase } from "./base/userPerformance.service.base";

@Injectable()
export class UserPerformanceService extends UserPerformanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
