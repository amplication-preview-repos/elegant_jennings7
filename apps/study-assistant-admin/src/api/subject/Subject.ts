import { Topic } from "../topic/Topic";

export type Subject = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  topics?: Array<Topic>;
  updatedAt: Date;
};
