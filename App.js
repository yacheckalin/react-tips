import React from "react";

import SearchForm from "./react-patterns/controlled-component/SearchForm";
import Clicker from "./react-patterns/state-hoisting/Clicker";
import NavigationLayout from "./react-patterns/layout-component/NavigationLayout";
import UserContainer from "./react-patterns/container-component/UserContainer";
import Message from "./react-patterns/render-props/Message";
import RenderUserList, { UserList } from "./react-patterns/hoc/RenderList";
import SimpleCounter from "./code-samples/counter";
import SimpleToggler from "./code-samples/toggler";
import ResumeListContainer from "./code-samples/resume-list";
import TestContainer from "./code-samples/context-test";

const Users = RenderUserList(UserList);

const App = () => (
  <div>
    {/* <SimpleToggler value={false} />
    <SimpleCounter initial={10} />
    <SearchForm />
    <Clicker />
    <NavigationLayout />
    <UserContainer />
    <Message />
    <Users /> */}
    {/* <ResumeListContainer /> */}
    <TestContainer />
  </div>
);

export default App;
