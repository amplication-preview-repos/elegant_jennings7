import { ExamBoard } from "../examBoard/ExamBoard";
import { Topic } from "../topic/Topic";
import { UserPerformance } from "../userPerformance/UserPerformance";

export type Question = {
  createdAt: Date;
  examBoard?: ExamBoard | null;
  id: string;
  text: string | null;
  topic?: Topic | null;
  updatedAt: Date;
  userPerformances?: Array<UserPerformance>;
  year: number | null;
};
