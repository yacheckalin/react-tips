import React from "react";
import NavigationBar from "./NavigationBar";
import SearchBar from "./SearchBar";

const NavigationLayout = () => <NavigationBar search={<SearchBar />} />;

export default NavigationLayout;
