import { RecommendationCreateNestedManyWithoutUsersInput } from "./RecommendationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserPerformanceCreateNestedManyWithoutUsersInput } from "./UserPerformanceCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  recommendations?: RecommendationCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  userPerformances?: UserPerformanceCreateNestedManyWithoutUsersInput;
};
