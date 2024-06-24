import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type TopicWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  questions?: QuestionListRelationFilter;
  recommendations?: RecommendationListRelationFilter;
  subject?: SubjectWhereUniqueInput;
};
