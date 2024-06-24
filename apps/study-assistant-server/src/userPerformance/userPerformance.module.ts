import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserPerformanceModuleBase } from "./base/userPerformance.module.base";
import { UserPerformanceService } from "./userPerformance.service";
import { UserPerformanceController } from "./userPerformance.controller";
import { UserPerformanceResolver } from "./userPerformance.resolver";

@Module({
  imports: [UserPerformanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserPerformanceController],
  providers: [UserPerformanceService, UserPerformanceResolver],
  exports: [UserPerformanceService],
})
export class UserPerformanceModule {}
