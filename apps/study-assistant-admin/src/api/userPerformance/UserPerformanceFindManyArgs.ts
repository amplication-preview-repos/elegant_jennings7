import { UserPerformanceWhereInput } from "./UserPerformanceWhereInput";
import { UserPerformanceOrderByInput } from "./UserPerformanceOrderByInput";

export type UserPerformanceFindManyArgs = {
  where?: UserPerformanceWhereInput;
  orderBy?: Array<UserPerformanceOrderByInput>;
  skip?: number;
  take?: number;
};
