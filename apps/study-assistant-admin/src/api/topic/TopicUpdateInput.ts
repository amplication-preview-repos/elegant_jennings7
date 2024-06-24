import { QuestionUpdateManyWithoutTopicsInput } from "./QuestionUpdateManyWithoutTopicsInput";
import { RecommendationUpdateManyWithoutTopicsInput } from "./RecommendationUpdateManyWithoutTopicsInput";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type TopicUpdateInput = {
  name?: string | null;
  questions?: QuestionUpdateManyWithoutTopicsInput;
  recommendations?: RecommendationUpdateManyWithoutTopicsInput;
  subject?: SubjectWhereUniqueInput | null;
};
