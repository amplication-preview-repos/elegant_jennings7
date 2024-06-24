import { SortOrder } from "../../util/SortOrder";

export type UserPerformanceOrderByInput = {
  answeredCorrectly?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  questionId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
