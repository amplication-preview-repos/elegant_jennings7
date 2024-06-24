import { TopicUpdateManyWithoutSubjectsInput } from "./TopicUpdateManyWithoutSubjectsInput";

export type SubjectUpdateInput = {
  description?: string | null;
  name?: string | null;
  topics?: TopicUpdateManyWithoutSubjectsInput;
};
