import { Question } from "../question/Question";
import { User } from "../user/User";

export type UserPerformance = {
  answeredCorrectly: boolean | null;
  createdAt: Date;
  id: string;
  question?: Question | null;
  updatedAt: Date;
  user?: User | null;
};
