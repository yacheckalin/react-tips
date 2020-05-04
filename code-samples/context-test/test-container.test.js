import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

import TestContainer from "./test-container";

describe("<TestContainer />", () => {
  test("displays and shows properly", () => {
    const wrapper = shallow(<TestContainer />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
