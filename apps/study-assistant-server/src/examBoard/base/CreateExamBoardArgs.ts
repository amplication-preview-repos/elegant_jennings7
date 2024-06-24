/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExamBoardCreateInput } from "./ExamBoardCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateExamBoardArgs {
  @ApiProperty({
    required: true,
    type: () => ExamBoardCreateInput,
  })
  @ValidateNested()
  @Type(() => ExamBoardCreateInput)
  @Field(() => ExamBoardCreateInput, { nullable: false })
  data!: ExamBoardCreateInput;
}

export { CreateExamBoardArgs as CreateExamBoardArgs };
