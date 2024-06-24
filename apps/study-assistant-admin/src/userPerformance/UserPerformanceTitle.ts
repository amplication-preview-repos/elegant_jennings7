import { UserPerformance as TUserPerformance } from "../api/userPerformance/UserPerformance";

export const USERPERFORMANCE_TITLE_FIELD = "id";

export const UserPerformanceTitle = (record: TUserPerformance): string => {
  return record.id?.toString() || String(record.id);
};
