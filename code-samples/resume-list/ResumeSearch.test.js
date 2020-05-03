import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

import ResumeSearch from "./ResumeSearch";

describe("<ResumeSearch />", () => {
  const props = {
    onSearch: jest.fn(),
  };
  test("renders and displays properly", () => {
    const wrapper = shallow(<ResumeSearch {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
