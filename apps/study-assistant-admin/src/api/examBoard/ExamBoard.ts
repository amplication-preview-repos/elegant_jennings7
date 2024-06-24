import { Question } from "../question/Question";

export type ExamBoard = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  questions?: Array<Question>;
  updatedAt: Date;
};
