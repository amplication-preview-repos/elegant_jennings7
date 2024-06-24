import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecommendationUpdateInput = {
  priority?: number | null;
  topic?: TopicWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
