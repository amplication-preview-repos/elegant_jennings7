import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExamBoardResolverBase } from "./base/examBoard.resolver.base";
import { ExamBoard } from "./base/ExamBoard";
import { ExamBoardService } from "./examBoard.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExamBoard)
export class ExamBoardResolver extends ExamBoardResolverBase {
  constructor(
    protected readonly service: ExamBoardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
