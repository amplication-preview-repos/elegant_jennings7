import { Recommendation } from "../recommendation/Recommendation";
import { JsonValue } from "type-fest";
import { UserPerformance } from "../userPerformance/UserPerformance";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  recommendations?: Array<Recommendation>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userPerformances?: Array<UserPerformance>;
};
