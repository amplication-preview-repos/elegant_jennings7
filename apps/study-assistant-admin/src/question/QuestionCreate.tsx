import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ExamBoardTitle } from "../examBoard/ExamBoardTitle";
import { TopicTitle } from "../topic/TopicTitle";
import { UserPerformanceTitle } from "../userPerformance/UserPerformanceTitle";

export const QuestionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="examBoard.id"
          reference="ExamBoard"
          label="ExamBoard"
        >
          <SelectInput optionText={ExamBoardTitle} />
        </ReferenceInput>
        <TextInput label="Text" multiline source="text" />
        <ReferenceInput source="topic.id" reference="Topic" label="Topic">
          <SelectInput optionText={TopicTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="userPerformances"
          reference="UserPerformance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserPerformanceTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Create>
  );
};
