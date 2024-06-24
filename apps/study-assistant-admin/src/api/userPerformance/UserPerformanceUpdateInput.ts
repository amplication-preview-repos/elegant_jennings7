import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPerformanceUpdateInput = {
  answeredCorrectly?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
