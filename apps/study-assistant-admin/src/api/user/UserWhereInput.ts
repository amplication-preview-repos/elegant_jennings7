import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";
import { UserPerformanceListRelationFilter } from "../userPerformance/UserPerformanceListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  recommendations?: RecommendationListRelationFilter;
  username?: StringFilter;
  userPerformances?: UserPerformanceListRelationFilter;
};
