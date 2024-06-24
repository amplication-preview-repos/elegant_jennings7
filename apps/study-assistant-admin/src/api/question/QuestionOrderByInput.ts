import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  createdAt?: SortOrder;
  examBoardId?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  topicId?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
