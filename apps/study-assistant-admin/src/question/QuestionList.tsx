import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EXAMBOARD_TITLE_FIELD } from "../examBoard/ExamBoardTitle";
import { TOPIC_TITLE_FIELD } from "../topic/TopicTitle";

export const QuestionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Questions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="ExamBoard"
          source="examboard.id"
          reference="ExamBoard"
        >
          <TextField source={EXAMBOARD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Text" source="text" />
        <ReferenceField label="Topic" source="topic.id" reference="Topic">
          <TextField source={TOPIC_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Year" source="year" />
      </Datagrid>
    </List>
  );
};
