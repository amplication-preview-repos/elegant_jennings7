import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecommendationWhereInput = {
  id?: StringFilter;
  priority?: FloatNullableFilter;
  topic?: TopicWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
