/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Subject } from "./Subject";
import { SubjectCountArgs } from "./SubjectCountArgs";
import { SubjectFindManyArgs } from "./SubjectFindManyArgs";
import { SubjectFindUniqueArgs } from "./SubjectFindUniqueArgs";
import { CreateSubjectArgs } from "./CreateSubjectArgs";
import { UpdateSubjectArgs } from "./UpdateSubjectArgs";
import { DeleteSubjectArgs } from "./DeleteSubjectArgs";
import { TopicFindManyArgs } from "../../topic/base/TopicFindManyArgs";
import { Topic } from "../../topic/base/Topic";
import { SubjectService } from "../subject.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Subject)
export class SubjectResolverBase {
  constructor(
    protected readonly service: SubjectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "read",
    possession: "any",
  })
  async _subjectsMeta(
    @graphql.Args() args: SubjectCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Subject])
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "read",
    possession: "any",
  })
  async subjects(
    @graphql.Args() args: SubjectFindManyArgs
  ): Promise<Subject[]> {
    return this.service.subjects(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Subject, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "read",
    possession: "own",
  })
  async subject(
    @graphql.Args() args: SubjectFindUniqueArgs
  ): Promise<Subject | null> {
    const result = await this.service.subject(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Subject)
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "create",
    possession: "any",
  })
  async createSubject(
    @graphql.Args() args: CreateSubjectArgs
  ): Promise<Subject> {
    return await this.service.createSubject({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Subject)
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "update",
    possession: "any",
  })
  async updateSubject(
    @graphql.Args() args: UpdateSubjectArgs
  ): Promise<Subject | null> {
    try {
      return await this.service.updateSubject({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Subject)
  @nestAccessControl.UseRoles({
    resource: "Subject",
    action: "delete",
    possession: "any",
  })
  async deleteSubject(
    @graphql.Args() args: DeleteSubjectArgs
  ): Promise<Subject | null> {
    try {
      return await this.service.deleteSubject(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Topic], { name: "topics" })
  @nestAccessControl.UseRoles({
    resource: "Topic",
    action: "read",
    possession: "any",
  })
  async findTopics(
    @graphql.Parent() parent: Subject,
    @graphql.Args() args: TopicFindManyArgs
  ): Promise<Topic[]> {
    const results = await this.service.findTopics(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
