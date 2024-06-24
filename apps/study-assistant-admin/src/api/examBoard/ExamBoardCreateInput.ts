import { QuestionCreateNestedManyWithoutExamBoardsInput } from "./QuestionCreateNestedManyWithoutExamBoardsInput";

export type ExamBoardCreateInput = {
  description?: string | null;
  name?: string | null;
  questions?: QuestionCreateNestedManyWithoutExamBoardsInput;
};
