import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

import ResumeReset from "./ResumeReset";

describe("<ResumeReset />", () => {
  const props = {
    onReset: jest.fn(),
  };
  test("renders and displays properly", () => {
    const wrapper = shallow(<ResumeReset {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
