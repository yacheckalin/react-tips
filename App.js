import React from "react";

import SearchForm from "./react-patterns/controlled-component/SearchForm";
import Clicker from "./react-patterns/state-hoisting/Clicker";
import NavigationLayout from "./react-patterns/layout-component/NavigationLayout";
import UserContainer from "./react-patterns/container-component/UserContainer";

const App = () => (
  <div>
    <SearchForm />
    <Clicker />
    <NavigationLayout />
    <UserContainer />
  </div>
);

export default App;
