import { Topic } from "../topic/Topic";
import { User } from "../user/User";

export type Recommendation = {
  createdAt: Date;
  id: string;
  priority: number | null;
  topic?: Topic | null;
  updatedAt: Date;
  user?: User | null;
};
