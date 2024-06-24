import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExamBoardService } from "./examBoard.service";
import { ExamBoardControllerBase } from "./base/examBoard.controller.base";

@swagger.ApiTags("examBoards")
@common.Controller("examBoards")
export class ExamBoardController extends ExamBoardControllerBase {
  constructor(
    protected readonly service: ExamBoardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
