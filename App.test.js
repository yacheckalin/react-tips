import App from "./App";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";

describe("<App />", () => {
  it("renders and displays properly", () => {
    const wrapper = shallow(<App />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
