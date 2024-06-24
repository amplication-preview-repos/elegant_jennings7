import { QuestionUpdateManyWithoutExamBoardsInput } from "./QuestionUpdateManyWithoutExamBoardsInput";

export type ExamBoardUpdateInput = {
  description?: string | null;
  name?: string | null;
  questions?: QuestionUpdateManyWithoutExamBoardsInput;
};
