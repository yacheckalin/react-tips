import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

import ResumeListContainer from "./ResumeListContainer";

describe("<ResumeListContainer />", () => {
  const props = {
    onSearch: jest.fn(),
  };
  test("renders and displays properly", () => {
    const wrapper = shallow(<ResumeListContainer {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
