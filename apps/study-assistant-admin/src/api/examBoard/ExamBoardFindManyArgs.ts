import { ExamBoardWhereInput } from "./ExamBoardWhereInput";
import { ExamBoardOrderByInput } from "./ExamBoardOrderByInput";

export type ExamBoardFindManyArgs = {
  where?: ExamBoardWhereInput;
  orderBy?: Array<ExamBoardOrderByInput>;
  skip?: number;
  take?: number;
};
