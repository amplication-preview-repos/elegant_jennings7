import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { QUESTION_TITLE_FIELD } from "./QuestionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EXAMBOARD_TITLE_FIELD } from "../examBoard/ExamBoardTitle";
import { TOPIC_TITLE_FIELD } from "../topic/TopicTitle";

export const QuestionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="UserPerformance"
          target="questionId"
          label="UserPerformances"
        >
          <Datagrid rowClick="show">
            <BooleanField
              label="AnsweredCorrectly"
              source="answeredCorrectly"
            />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Question"
              source="question.id"
              reference="Question"
            >
              <TextField source={QUESTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
