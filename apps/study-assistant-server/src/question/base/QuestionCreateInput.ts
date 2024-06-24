/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExamBoardWhereUniqueInput } from "../../examBoard/base/ExamBoardWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { TopicWhereUniqueInput } from "../../topic/base/TopicWhereUniqueInput";
import { UserPerformanceCreateNestedManyWithoutQuestionsInput } from "./UserPerformanceCreateNestedManyWithoutQuestionsInput";

@InputType()
class QuestionCreateInput {
  @ApiProperty({
    required: false,
    type: () => ExamBoardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExamBoardWhereUniqueInput)
  @IsOptional()
  @Field(() => ExamBoardWhereUniqueInput, {
    nullable: true,
  })
  examBoard?: ExamBoardWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text?: string | null;

  @ApiProperty({
    required: false,
    type: () => TopicWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TopicWhereUniqueInput)
  @IsOptional()
  @Field(() => TopicWhereUniqueInput, {
    nullable: true,
  })
  topic?: TopicWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserPerformanceCreateNestedManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => UserPerformanceCreateNestedManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => UserPerformanceCreateNestedManyWithoutQuestionsInput, {
    nullable: true,
  })
  userPerformances?: UserPerformanceCreateNestedManyWithoutQuestionsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  year?: number | null;
}

export { QuestionCreateInput as QuestionCreateInput };
