import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserPerformanceService } from "./userPerformance.service";
import { UserPerformanceControllerBase } from "./base/userPerformance.controller.base";

@swagger.ApiTags("userPerformances")
@common.Controller("userPerformances")
export class UserPerformanceController extends UserPerformanceControllerBase {
  constructor(
    protected readonly service: UserPerformanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
