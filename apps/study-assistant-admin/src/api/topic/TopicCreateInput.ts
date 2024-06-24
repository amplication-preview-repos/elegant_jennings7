import { QuestionCreateNestedManyWithoutTopicsInput } from "./QuestionCreateNestedManyWithoutTopicsInput";
import { RecommendationCreateNestedManyWithoutTopicsInput } from "./RecommendationCreateNestedManyWithoutTopicsInput";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type TopicCreateInput = {
  name?: string | null;
  questions?: QuestionCreateNestedManyWithoutTopicsInput;
  recommendations?: RecommendationCreateNestedManyWithoutTopicsInput;
  subject?: SubjectWhereUniqueInput | null;
};
