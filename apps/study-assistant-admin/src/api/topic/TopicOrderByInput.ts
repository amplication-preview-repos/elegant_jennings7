import { SortOrder } from "../../util/SortOrder";

export type TopicOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  subjectId?: SortOrder;
  updatedAt?: SortOrder;
};
