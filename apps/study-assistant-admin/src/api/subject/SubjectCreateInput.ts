import { TopicCreateNestedManyWithoutSubjectsInput } from "./TopicCreateNestedManyWithoutSubjectsInput";

export type SubjectCreateInput = {
  description?: string | null;
  name?: string | null;
  topics?: TopicCreateNestedManyWithoutSubjectsInput;
};
