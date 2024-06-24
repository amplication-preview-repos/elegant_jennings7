import { Question } from "../question/Question";
import { Recommendation } from "../recommendation/Recommendation";
import { Subject } from "../subject/Subject";

export type Topic = {
  createdAt: Date;
  id: string;
  name: string | null;
  questions?: Array<Question>;
  recommendations?: Array<Recommendation>;
  subject?: Subject | null;
  updatedAt: Date;
};
