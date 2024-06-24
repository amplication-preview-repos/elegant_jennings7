import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TopicListRelationFilter } from "../topic/TopicListRelationFilter";

export type SubjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  topics?: TopicListRelationFilter;
};
