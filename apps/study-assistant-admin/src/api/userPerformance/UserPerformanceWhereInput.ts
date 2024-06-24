import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPerformanceWhereInput = {
  answeredCorrectly?: BooleanNullableFilter;
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
