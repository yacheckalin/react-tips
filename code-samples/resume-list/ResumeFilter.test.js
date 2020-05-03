import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

import ResumeFilter from "./ResumeFilter";

describe("<ResumeFilter />", () => {
  const props = {
    onFilter: jest.fn(),
  };
  test("renders and displays properly", () => {
    const wrapper = shallow(<ResumeFilter {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
