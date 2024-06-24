import { ExamBoardWhereUniqueInput } from "../examBoard/ExamBoardWhereUniqueInput";
import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";
import { UserPerformanceCreateNestedManyWithoutQuestionsInput } from "./UserPerformanceCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  examBoard?: ExamBoardWhereUniqueInput | null;
  text?: string | null;
  topic?: TopicWhereUniqueInput | null;
  userPerformances?: UserPerformanceCreateNestedManyWithoutQuestionsInput;
  year?: number | null;
};
