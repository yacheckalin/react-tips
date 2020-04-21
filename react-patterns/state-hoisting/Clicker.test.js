import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import Clicker from "./Clicker";

describe("<Clicker />", () => {
  it("renders and displays properly", () => {
    const wrapper = shallow(<Clicker />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
