import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExamBoardModuleBase } from "./base/examBoard.module.base";
import { ExamBoardService } from "./examBoard.service";
import { ExamBoardController } from "./examBoard.controller";
import { ExamBoardResolver } from "./examBoard.resolver";

@Module({
  imports: [ExamBoardModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExamBoardController],
  providers: [ExamBoardService, ExamBoardResolver],
  exports: [ExamBoardService],
})
export class ExamBoardModule {}
