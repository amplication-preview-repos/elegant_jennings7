import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TopicModuleBase } from "./base/topic.module.base";
import { TopicService } from "./topic.service";
import { TopicController } from "./topic.controller";
import { TopicResolver } from "./topic.resolver";

@Module({
  imports: [TopicModuleBase, forwardRef(() => AuthModule)],
  controllers: [TopicController],
  providers: [TopicService, TopicResolver],
  exports: [TopicService],
})
export class TopicModule {}
