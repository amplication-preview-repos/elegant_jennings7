import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserPerformanceResolverBase } from "./base/userPerformance.resolver.base";
import { UserPerformance } from "./base/UserPerformance";
import { UserPerformanceService } from "./userPerformance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserPerformance)
export class UserPerformanceResolver extends UserPerformanceResolverBase {
  constructor(
    protected readonly service: UserPerformanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
