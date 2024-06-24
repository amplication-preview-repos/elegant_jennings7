import { ExamBoardWhereUniqueInput } from "../examBoard/ExamBoardWhereUniqueInput";
import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";
import { UserPerformanceUpdateManyWithoutQuestionsInput } from "./UserPerformanceUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  examBoard?: ExamBoardWhereUniqueInput | null;
  text?: string | null;
  topic?: TopicWhereUniqueInput | null;
  userPerformances?: UserPerformanceUpdateManyWithoutQuestionsInput;
  year?: number | null;
};
