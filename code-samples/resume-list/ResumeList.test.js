import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

import ResumeList from "./ResumeList";

describe("<ResumeList />", () => {
  const props = {
    onDelete: jest.fn(),
    onEdit: jest.fn(),
  };
  test("renders and displays properly", () => {
    const wrapper = shallow(<ResumeList {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
