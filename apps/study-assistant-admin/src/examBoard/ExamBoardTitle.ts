import { ExamBoard as TExamBoard } from "../api/examBoard/ExamBoard";

export const EXAMBOARD_TITLE_FIELD = "name";

export const ExamBoardTitle = (record: TExamBoard): string => {
  return record.name?.toString() || String(record.id);
};
