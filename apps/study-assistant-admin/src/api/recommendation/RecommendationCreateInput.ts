import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecommendationCreateInput = {
  priority?: number | null;
  topic?: TopicWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
