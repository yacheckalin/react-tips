import React from "react";
import toJSON from "enzyme-to-json";
import Message from "./Message";
import { shallow } from "enzyme";

describe("<Message />", () => {
  it("renders and displays properly", () => {
    const wrapper = shallow(<Message />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
