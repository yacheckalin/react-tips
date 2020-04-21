import React from "react";
import toJSON from "enzyme-to-json";
import NavigationLayout from "./NavigationLayout";
import NavigationBar from "./NavigationBar";
import SearchBar from "./SearchBar";
import { shallow } from "enzyme";

describe("<NavigationLayout />", () => {
  it("renders and displays properly", () => {
    const wrapper = shallow(<NavigationLayout />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it("renders and displays properly", () => {
    const wrapper = shallow(<NavigationBar />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it("renders and displays properly", () => {
    const wrapper = shallow(<SearchBar />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
