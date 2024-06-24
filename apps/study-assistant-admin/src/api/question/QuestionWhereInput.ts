import { ExamBoardWhereUniqueInput } from "../examBoard/ExamBoardWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";
import { UserPerformanceListRelationFilter } from "../userPerformance/UserPerformanceListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type QuestionWhereInput = {
  examBoard?: ExamBoardWhereUniqueInput;
  id?: StringFilter;
  text?: StringNullableFilter;
  topic?: TopicWhereUniqueInput;
  userPerformances?: UserPerformanceListRelationFilter;
  year?: IntNullableFilter;
};
