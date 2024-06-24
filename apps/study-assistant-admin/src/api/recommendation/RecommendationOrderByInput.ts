import { SortOrder } from "../../util/SortOrder";

export type RecommendationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  priority?: SortOrder;
  topicId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
