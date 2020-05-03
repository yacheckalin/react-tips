import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

import ResumeSort from "./ResumeSort";

describe("<ResumeSort />", () => {
  const props = {
    onSort: jest.fn(),
  };
  test("renders and displays properly", () => {
    const wrapper = shallow(<ResumeSort {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
