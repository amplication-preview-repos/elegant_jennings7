import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ExamBoardList } from "./examBoard/ExamBoardList";
import { ExamBoardCreate } from "./examBoard/ExamBoardCreate";
import { ExamBoardEdit } from "./examBoard/ExamBoardEdit";
import { ExamBoardShow } from "./examBoard/ExamBoardShow";
import { SubjectList } from "./subject/SubjectList";
import { SubjectCreate } from "./subject/SubjectCreate";
import { SubjectEdit } from "./subject/SubjectEdit";
import { SubjectShow } from "./subject/SubjectShow";
import { TopicList } from "./topic/TopicList";
import { TopicCreate } from "./topic/TopicCreate";
import { TopicEdit } from "./topic/TopicEdit";
import { TopicShow } from "./topic/TopicShow";
import { RecommendationList } from "./recommendation/RecommendationList";
import { RecommendationCreate } from "./recommendation/RecommendationCreate";
import { RecommendationEdit } from "./recommendation/RecommendationEdit";
import { RecommendationShow } from "./recommendation/RecommendationShow";
import { UserPerformanceList } from "./userPerformance/UserPerformanceList";
import { UserPerformanceCreate } from "./userPerformance/UserPerformanceCreate";
import { UserPerformanceEdit } from "./userPerformance/UserPerformanceEdit";
import { UserPerformanceShow } from "./userPerformance/UserPerformanceShow";
import { QuestionList } from "./question/QuestionList";
import { QuestionCreate } from "./question/QuestionCreate";
import { QuestionEdit } from "./question/QuestionEdit";
import { QuestionShow } from "./question/QuestionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Study Assistant"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ExamBoard"
          list={ExamBoardList}
          edit={ExamBoardEdit}
          create={ExamBoardCreate}
          show={ExamBoardShow}
        />
        <Resource
          name="Subject"
          list={SubjectList}
          edit={SubjectEdit}
          create={SubjectCreate}
          show={SubjectShow}
        />
        <Resource
          name="Topic"
          list={TopicList}
          edit={TopicEdit}
          create={TopicCreate}
          show={TopicShow}
        />
        <Resource
          name="Recommendation"
          list={RecommendationList}
          edit={RecommendationEdit}
          create={RecommendationCreate}
          show={RecommendationShow}
        />
        <Resource
          name="UserPerformance"
          list={UserPerformanceList}
          edit={UserPerformanceEdit}
          create={UserPerformanceCreate}
          show={UserPerformanceShow}
        />
        <Resource
          name="Question"
          list={QuestionList}
          edit={QuestionEdit}
          create={QuestionCreate}
          show={QuestionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
